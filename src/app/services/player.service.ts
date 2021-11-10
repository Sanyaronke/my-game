import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PlayerService {

  public playerStat = [
    {name : 'tytytytytytyty', score: 0},
  ];
  public playersInfo = {
    users: {
      user_1: "Dawin_A",
      scoreUser_1: "1600",
      user_2: "Dawin_B",
      scoreUser_2: "400",
    },
    usersKits: {
      pawnUser_1: " ",
      pawnUser_2: " ",
      user_1_removeCell: false,
      user_2_removeCell: false,
    }

  };

  constructor(private httpClient: HttpClient) {
  }

  public getFirstPlayerName(): string {
      return this.playersInfo.users.user_1;
  }

  public getSecondPlayerNam(): string {
      return this.playersInfo.users.user_2;
  }


  public firstPlayerRemovePan(): boolean {
      return this.playersInfo.usersKits.user_1_removeCell;
  }

  public secondPlayerRemovePan(): boolean {
      return this.playersInfo.usersKits.user_2_removeCell;
  }

  public resetFirstPlayerRemovePan() {
      this.playersInfo.usersKits.user_1_removeCell = !this.playersInfo.usersKits.user_1_removeCell;
  }

  public resetSecondPlayerRemovePan() {
      this.playersInfo.usersKits.user_2_removeCell = !this.playersInfo.usersKits.user_2_removeCell;
  }

  saveScoreToServe() {
    this.httpClient
      .post<object>('https://classement-player-default-rtdb.firebaseio.com/playersInfo.json', this.playersInfo.users)
      .subscribe(
        () => {
          console.log("enregistrement success");
        },
      (error) => {
          console.log("erreur : " + error);
        }
      )
  }

  getStatFromServe() {
    this.httpClient
      .get('https://classement-player-default-rtdb.firebaseio.com/playersInfo.json')
      .subscribe(
        (res) => {

          console.log(Object.entries(res))
          let user1 = ''
          let user2 = ''
          let score1 = 0
          let score2 = 0
          for (let i = 0; i < Object.entries(res).length ; i++) {
            for (const resKey of Object.entries(res)[i]) {
              if (resKey.user_1 !== undefined) {
                user1 = resKey.user_1
              }
              if (resKey.user_1 !== undefined) {
                user1 = resKey.user_1
              }
              if (resKey.user_2 !== undefined) {
                user2 = resKey.user_2
              }
              if (resKey.user_1 !== undefined) {
                score1 = resKey.scoreUser_1
              }
              if (resKey.user_1 !== undefined) {
                score2 = resKey.scoreUser_2
              }

            }
            this.playerStat.push({name: user1, score: score1}, {name: user2, score: score2})
            this.playerStat.sort(function (a, b) {
              return b.score - a.score;
            });
          }

        },
        (err) =>{}
      )

  }

}
