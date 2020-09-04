import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { PlaylistRowComponent } from './components/playlist-row/playlist-row.component';
import { HomeComponent } from './views/home/home.component';
import { SpotifyEmbeddedPlayerComponent } from './components/spotify-embedded-player/spotify-embedded-player.component';
import { HeroComponent } from './views/hero/hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, PlaylistCardComponent, PlaylistRowComponent, HomeComponent, SpotifyEmbeddedPlayerComponent, HeroComponent, HeroCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
