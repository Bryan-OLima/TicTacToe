import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { GameLines as Lines} from './gameLines';
import { GameLines } from './models/game.models';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements DoCheck, OnInit {

  public gameOver: boolean = false;

  public game!: GameLines;
  public playerTurn!: string;

  public message!: string;
  
  constructor(
    private gameService: GameService
  ){}  

  ngDoCheck(): void {
    this.gameService.isGameOver();
    this.checkGameMessageStatus();
    this.endGame();
    this.whosPlaying();
  }

  ngOnInit(): void {
    this.game = this.gameService.getAllLines();
  }

  checkGameMessageStatus(){
    this.message = this.gameService.message;
  }

  startGame() {

  }

  whosPlaying() {
    this.playerTurn = this.gameService.player();
  }
  endGame(){
    this.gameOver = this.gameService.gameOver;
  }

  pickSquare(i:number, p:string) {
    switch (p){
      case 'lineOne':
        this.gameService.pickedLineOne(i);
        break;

        case 'lineTwo':
          this.gameService.pickedLineTwo(i);
          break;

          case 'lineThree':
            this.gameService.pickedLineThree(i);
            break;
    }
  }

}
