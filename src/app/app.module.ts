import { APOLLO_OPTIONS } from 'apollo-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './views/auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistRowComponent } from './components/playlist-row/playlist-row.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpotifyEmbeddedPlayerComponent } from './components/spotify-embedded-player/spotify-embedded-player.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaylistCardComponent,
    PlaylistRowComponent,
    HomeComponent,
    SpotifyEmbeddedPlayerComponent,
    HeroComponent,
    HeroCardComponent,
    PlaylistDetailComponent,
    AuthComponent,
    PlaylistHeaderComponent,
    TracklistComponent,
    UserProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
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
