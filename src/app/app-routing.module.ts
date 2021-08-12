import { RouterModule, Routes } from '@angular/router';

import { AlbumDetailComponent } from './views/album-detail/album-detail.component';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { AuthComponent } from './views/auth/auth.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { PostPlaylistComponent } from './views/post-playlist/post-playlist.component';
import { SearchComponent } from './views/search/search.component';
import { SeeAllItemsComponent } from './views/see-all-items/see-all-items.component';
import { SignUpConfirmationComponent } from './views/sign-up-confirmation/sign-up-confirmation.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'welcome', component: HeroComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
  { path: 'artist/:artistId', component: ArtistDetailComponent },
  { path: 'user/:username', component: UserProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'see-all-items', component: SeeAllItemsComponent },
  { path: 'album/:albumId', component: AlbumDetailComponent },
  { path: 'post-playlist', component: PostPlaylistComponent },
  { path: 'sign-up-confirmation', component: SignUpConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
