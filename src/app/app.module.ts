import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app/components/app/app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { GameComponent } from '../app/components/game/game.component';
import { BodyComponent } from '../app/components/body/body.component';
import { ErrorComponent } from './components/game-error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { PersonagemService } from './components/body/shared/personagem.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerOneComponent } from '../app/components/player-one/player-one.component';
import { PlayerTwoComponent } from '../app/components/player-two/player-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    BodyComponent,
    ErrorComponent,
    PlayerOneComponent,
    PlayerTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [PersonagemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
