import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { PlayerComponent } from './player/player.component';
import { TribeComponent } from './tribe/tribe.component';
import { DisplayPagePipePipe } from './display-page-pipe.pipe';
import { NameFilterPipe } from './name-filter.pipe';
import { PlayerDetailPageComponent } from './player/player-detail-page/player-detail-page.component';
import { TribeDetailPageComponent } from './tribe/tribe-detail-page/tribe-detail-page.component';
import { MaterialModule } from '../material/material.module';
import { PointpipePipe } from './pointpipe.pipe';





@NgModule({
  declarations: [
    RankingComponent,
    TribeComponent,
    PlayerComponent,
    DisplayPagePipePipe,
    NameFilterPipe,
    PlayerDetailPageComponent,
    TribeDetailPageComponent,
    PointpipePipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PointpipePipe
  ]
})
export class RankingModule { }
