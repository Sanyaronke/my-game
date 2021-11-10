import { Component } from '@angular/core';
import {PlayerService} from "./services/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-game';

  constructor(private playerStat: PlayerService) {
  }
  allPlayerStats() {
    //this.playerStat.getStatFromServe()
    return this.playerStat.playerStat;
  }
}
