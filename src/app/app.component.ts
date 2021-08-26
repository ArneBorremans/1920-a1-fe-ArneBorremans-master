import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapsService } from './shared/services/maps.service';
import { CurrentWorldService } from './shared/services/current-world.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TribalWarsHubAngularFrontEnd';
  loggedInUser$ = this._authenticationService.user$;

  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private currentWorldService: CurrentWorldService
  ) {
  }

  currentWorld: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.currentWorld = +params.get('world'); });
    this.currentWorldService.changeWorld(this.currentWorld);

    this.currentWorldService.sharedWorld.subscribe(currentWorld => this.currentWorld = currentWorld);
  }

  changeWorld(world: number) {
    this.currentWorldService.changeWorld(world);
    this.router.navigate([this.getPath() + "/" + world]);
  }

  getPath(): string {
    return this.route.snapshot.firstChild.url[0].path
  }

  logout() {
    this._authenticationService.logout();
  }
  login() {
    console.log('login');
  }
}
