import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public isGameOver!: boolean;

  constructor (
    private gameService: GameService
  ) {}

  reset(){
    this.gameService.resetGame();
    this.gameService.gameOver = false;
    this.gameService.message = '';
  }

}
