import { Component, OnInit, Input } from '@angular/core';
import { TWMap } from '../TWMap.model';
import { MapsService } from '../../shared/services/maps.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CurrentWorldService } from '../../shared/services/current-world.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() public twMap: TWMap;

  public img: string;
  public blob;
  base64data: string;
  mySrc;


  base64Image: any;
  images: any[] = new Array(11);
   
  private currentWorld;
  maps = ["toptribes", "topavgtribes", "topktribes", "topkatribes", "topplayers", "topkplayers", "topnoblers", "topkaplayers", "topkdplayers", "topksplayers", "fastnoblers"];
  mapnames = ["Top Tribes", "Avg Points/Player", "Tribe Dominance", "Top ODA Tribes", "Top Players", "Player Dominance", "Top Nobling Tribes", "Top ODA Players", "Top ODD Players", "Top ODS Players", "Fastest Noblers"]

  loading;
  loaded;

  constructor(private mapsService: MapsService, private domSanitizer: DomSanitizer, private route: ActivatedRoute, private currentWorldService: CurrentWorldService) {

  }

  async ngOnInit() {
    this.loading = true;
    this.loaded = false;


    this.route.paramMap.subscribe(params => { this.currentWorld = +params.get('world'); });
    this.currentWorldService.changeWorld(this.currentWorld);

    for (let index = 0; index < this.maps.length; index++) {

      let imageUrl = 'http://proxy-server.herokuapp.com/https://api.twmaps.ch/v1/maps/servers/en/worlds/en' + this.currentWorld + '/' + this.maps[index];      

      await this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
        this.base64Image = 'data:image/png;base64,' + base64data;
        this.images[index] = this.base64Image;
      });

    }
    setTimeout(() => { this.loadedComplete(); }, 750);
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url; img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  loadedComplete() {
    this.loaded = true;
    this.loading = false;
  }
}
