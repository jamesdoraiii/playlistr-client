import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HeroComponent, outlet: 'hero' },
  { path: 'home', component: HomeComponent },
  { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
  { path: 'test', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
