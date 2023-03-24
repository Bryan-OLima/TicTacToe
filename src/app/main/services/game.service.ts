import { Injectable } from '@angular/core';
import { GameLines as Lines} from '../game/gameLines';
import { GameLines } from '../game/models/game.models';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game: GameLines = Lines;
  private isX: boolean = false;
  public gameOver: boolean = false;
  public message: string = '';
   
  wins = {
    playerOne: 0,
    playerTwo: 0
  }

  constructor() { }

  getAllLines() {
    return this.game;
  }
  
  player(){
    if(this.isX){
      return '(X)';
    } else {
      return '(O)';
    }
  }

  isGameOver(){

    //first line winner
    if(this.game.lineOne[0]?.value != '' && this.game.lineOne[3]?.value != '' && this.game.lineOne[2]?.value != ''){
      if(this.game.lineOne[0]?.value == this.game.lineOne[1]?.value && this.game.lineOne[2]?.value == this.game.lineOne[1]?.value){
        let winner = this.game.lineOne[0].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    //second line winner
    if(this.game.lineTwo[0]?.value != '' && this.game.lineTwo[3]?.value != '' && this.game.lineTwo[2]?.value != ''){
      if(this.game.lineTwo[0]?.value == this.game.lineTwo[1]?.value && this.game.lineTwo[2]?.value == this.game.lineTwo[1]?.value){
        let winner = this.game.lineTwo[0].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++;
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++;
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }
    
    //third line winner
    if(this.game.lineThree[0]?.value != '' && this.game.lineThree[3]?.value != '' && this.game.lineThree[2]?.value != ''){
      if(this.game.lineThree[0]?.value == this.game.lineThree[1]?.value && this.game.lineThree[2]?.value == this.game.lineThree[1]?.value){
        let winner = this.game.lineThree[0].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    //first column winner
    if(this.game.lineOne[0]?.value != '' && this.game.lineTwo[0]?.value != '' && this.game.lineThree[0]?.value != ''){
      if(this.game.lineOne[0]?.value == this.game.lineTwo[0]?.value && this.game.lineThree[0]?.value == this.game.lineOne[0]?.value){
        let winner = this.game.lineOne[0].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    //second column winner
    if(this.game.lineOne[1]?.value != '' && this.game.lineTwo[1]?.value != '' && this.game.lineThree[1]?.value != ''){
      if(this.game.lineOne[1]?.value == this.game.lineTwo[1]?.value && this.game.lineThree[1]?.value == this.game.lineOne[1]?.value){
        let winner = this.game.lineOne[1].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    //third column winner
    if(this.game.lineOne[2]?.value != '' && this.game.lineTwo[2]?.value != '' && this.game.lineThree[2]?.value != ''){
      if(this.game.lineOne[2]?.value == this.game.lineTwo[2]?.value && this.game.lineThree[2]?.value == this.game.lineOne[2]?.value){
        let winner = this.game.lineOne[2].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    // first diagonal winner
    if(this.game.lineOne[0]?.value != '' && this.game.lineTwo[1]?.value != '' && this.game.lineThree[2]?.value != ''){
      if(this.game.lineOne[0]?.value == this.game.lineTwo[1]?.value && this.game.lineThree[2]?.value == this.game.lineOne[0]?.value){
        let winner = this.game.lineOne[0].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }

    // second diagonal winner
    if(this.game.lineOne[2]?.value != '' && this.game.lineTwo[1]?.value != '' && this.game.lineThree[0]?.value != ''){
      if(this.game.lineOne[2]?.value == this.game.lineTwo[1]?.value && this.game.lineThree[0]?.value == this.game.lineOne[2]?.value){
        let winner = this.game.lineOne[2].value;
        if(winner == 'O') {
          this.message = 'Player One wins! Circle Wins!';
          this.wins.playerOne++
          this.gameOver = true;
          console.log(this.wins.playerOne);
        } else {
          this.message = 'Player Two wins! X wins!';
          this.wins.playerTwo++
          this.gameOver = true;
          console.log(this.wins.playerTwo);
        }
      }
    }
    //fazer um for pra cada win case, um if de vitória.
    if(
      this.game.lineOne.every(obj => obj.value) && 
      this.game.lineTwo.every(obj => obj.value) && 
      this.game.lineThree.every(obj => obj.value)
    ){
      this.draw();
    }
  }

  draw() {
    this.gameOver = true;
    return this.message = 'Game Over: Draw';
  }

  pickedLineOne(i:number){
    if(this.game.lineOne[i].value == ''){
      if(this.isX){
        this.game.lineOne[i].value = 'X';
        this.isX = !this.isX;
      } else {
        this.game.lineOne[i].value = 'O';
        this.isX = !this.isX;
      }
    }
  }

  pickedLineTwo(i:number){
    if(this.game.lineTwo[i].value == ''){
      if(this.isX){
        this.game.lineTwo[i].value = 'X';
        this.isX = !this.isX;
      } else {
        this.game.lineTwo[i].value = 'O';
        this.isX = !this.isX;
      }
    }
  }

  pickedLineThree(i:number){
    if(this.game.lineThree[i].value == ''){
      if(this.isX){
        this.game.lineThree[i].value = 'X';
        this.isX = !this.isX;
      } else {
        this.game.lineThree[i].value = 'O';
        this.isX = !this.isX;
      }
    }
  }

  resetGame(){
    for(let game in this.game.lineOne){
      this.game.lineOne[game].value = ''
    }
    for(let game in this.game.lineTwo){
      this.game.lineTwo[game].value = ''
    }
    for(let game in this.game.lineThree){
      this.game.lineThree[game].value = ''
    }
  }
}
