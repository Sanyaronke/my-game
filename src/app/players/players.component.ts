import { Component,Input, OnInit } from '@angular/core';
import {PlayerService} from "../services/player.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  /**
   * Name of players
   */
  stat: any[];
  private name_player_2: string = '';

  constructor( private playerService: PlayerService ) {
    this.stat = this.playerService.playerStat;
  }

  ngOnInit(): void {
  }

  public displayPlayerName(): Array<string> {
      return [ this.playerService.getFirstPlayerName(), this.playerService.getSecondPlayerNam() ];
  }
  public onSetFirstPlayer(event: any) {
      this.playerService.playersInfo.users.user_1 = event.target.value;
      console.log(this.playerService.playersInfo.users.user_1)
  }

  public onSetSecondPlayer(event: any) {
      this.playerService.playersInfo.users.user_2 = event.target.value;
      console.log(this.playerService.playersInfo.users.user_2.trim())
  }

  begin(): boolean {
    return !(this.playerService.playersInfo.users.user_1.trim() !== '' && this.playerService.playersInfo.users.user_2.trim() !== '');

  }

  onSavePlayersStats() {
    this.playerService.saveScoreToServe();
  }

  onFetch() {
    this.playerService.getStatFromServe();
  }
  allPlayerStats() {
    console.log(this.playerService.playerStat)
    //this.playerService.getStatFromServe()
    return this.playerService.playerStat;
  }
}

