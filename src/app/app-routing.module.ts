import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HeroComponent } from './views/hero/hero.component';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'playlist/:playlistId', component: PlaylistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
