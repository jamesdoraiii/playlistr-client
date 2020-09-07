import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { PlaylistDetailComponent } from './views/playlist-detail/playlist-detail.component';
import { PlaylistRowComponent } from './components/playlist-row/playlist-row.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpotifyEmbeddedPlayerComponent } from './components/spotify-embedded-player/spotify-embedded-player.component';

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
    PlaylistDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
