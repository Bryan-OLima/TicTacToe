import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GameComponent } from './game/game.component';
import {MainRoutingModule} from './main-route.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    GameComponent,
    MainRoutingModule
  ]
})
export class MainModule { }
