import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {PlayerService} from "../services/player.service";

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent implements OnInit {

  constructor (
    private gameService: GameService,
    private playerService: PlayerService,
    ) { }

  ngOnInit(): void {
  }


}
