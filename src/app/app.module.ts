import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from './map/map.module';
import { MaterialModule } from './material/material.module';
import { PageComponent } from './page/page.component';
import { SizeDetectorComponent } from './page/size-detector/size-detector.component';
import { ContentService } from './shared/services/content.service';
import { ForumComponent } from './forum/forum.component';
import { CommentComponent } from './forum/comment/comment.component';
import { RankingComponent } from './ranking/ranking.component';
import { PlayerComponent } from './ranking/player/player.component';
import { TribeComponent } from './ranking/tribe/tribe.component';
import { DisplayPagePipePipe } from './ranking/display-page-pipe.pipe';
import { NameFilterPipe } from './ranking/name-filter.pipe';
import { PointpipePipe } from './ranking/pointpipe.pipe';
import { PlayerDetailPageComponent } from './ranking/player/player-detail-page/player-detail-page.component';
import { TribeDetailPageComponent } from './ranking/tribe/tribe-detail-page/tribe-detail-page.component';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './http-interceptors';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { DatecalculatorComponent } from './tool/Calculators/datecalculator/datecalculator.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    SizeDetectorComponent,
    ForumComponent,
    CommentComponent,
    RankingComponent,
    TribeComponent,
    PlayerComponent,
    DisplayPagePipePipe,
    NameFilterPipe,
    PlayerDetailPageComponent,
    TribeDetailPageComponent,
    PointpipePipe,
    HomeComponent,
    ToolComponent,
    DatecalculatorComponent,
  ],
  imports: [
    BrowserModule,
    MapModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
  ],
  providers: [ContentService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
