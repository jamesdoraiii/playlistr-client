import { RouterModule, Routes } from '@angular/router';

import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { AuthComponent } from './views/auth/auth.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { SearchComponent } from './views/search/search.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HeroComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
  { path: 'artist/:artistId', component: ArtistDetailComponent },
  { path: 'user/:userId', component: UserProfileComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
