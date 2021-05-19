import { APOLLO_OPTIONS } from 'apollo-angular';
import { AlbumDetailComponent } from './views/album-detail/album-detail.component';
import { AlbumDisplayComponent } from './components/album-display/album-display.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { ArtistHeaderComponent } from './components/artist-header/artist-header.component';
import { AuthComponent } from './views/auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { FormsModule } from '@angular/forms';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDetailComponent } from './views/item-detail/item-detail.component';
import { ItemHeaderComponent } from './components/item-header/item-header.component';
import { ItemRowComponent } from './components/item-row/item-row.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './views/playlists/playlists.component';
import { SearchComponent } from './views/search/search.component';
import { SeeAllItemsComponent } from './views/see-all-items/see-all-items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeroComponent,
    HeroCardComponent,
    PlaylistDetailComponent,
    AuthComponent,
    TracklistComponent,
    UserProfileComponent,
    ArtistDetailComponent,
    ArtistHeaderComponent,
    AlbumDisplayComponent,
    PlayerComponent,
    NavComponent,
    PlaylistsComponent,
    SearchComponent,
    ItemRowComponent,
    ItemCardComponent,
    SeeAllItemsComponent,
    AlbumDetailComponent,
    ItemDetailComponent,
    ItemHeaderComponent,
    ContextMenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:5000/graphql'
          })
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
