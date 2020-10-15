import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './views/auth/auth.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HeroComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
  { path: 'user/:userId', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
