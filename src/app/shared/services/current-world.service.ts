import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentWorldService {

  private world = new BehaviorSubject(107);
  sharedWorld = this.world.asObservable();

  constructor() { }

  changeWorld(world: number) {
    this.world.next(world);
  }
}
