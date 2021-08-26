// app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: PageComponent, data: {
      page: 'home'
      }},
  {
    path: 'players/:world', component: PageComponent, data: {
      page: 'players'
    }
  }, 
  {
    path: 'playerDetails/:world/:id', component: PageComponent, data: {
      page: 'playerDetails'
    }
  },
  {
    path: 'tribes/:world', component: PageComponent, data: {
      page: 'tribes'
    }
  },
  {
    path: 'tribeDetails/:world/:id', component: PageComponent, data: {
      page: 'tribeDetails'
    }
  },
  {
    path: 'maps/:world', component: PageComponent, data: {
      page: 'maps'
    }
  },
  {
    path: 'tools/:world', component: PageComponent, data: {
      page: 'tools'
    }
  },
  {
    path: 'forum', canActivate: [AuthGuard], component: PageComponent, data: {
      page: 'forum'
    }},
  {
    path: 'register', component: PageComponent, data: {
      page: 'register'
    }},
  {
    path: 'login', component: PageComponent, data: {
      page: 'login'
    }},
  {
    path: 'contact', component: PageComponent, data: {
      page: 'contact'
    }},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
