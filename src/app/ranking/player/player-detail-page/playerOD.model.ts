interface PlayerODJson {
  player_Id: number;
  od: number;
  oD_Rank: number;
  oda: number;
  odA_Rank: number;
  odd: number;
  odD_Rank: number;
}
export class PlayerOD {
  constructor(
    private _player_Id: number,
    private _od: number,
    private _oD_Rank: number,
    private _oda: number,
    private _odA_Rank: number,
    private _odd: number,
    private _odD_Rank: number) {
  }

  get player_Id(): number {
    return this._player_Id;
  }

  get od(): number {
    return this._od;
  }

  get oD_Rank(): number {
    return this._oD_Rank;
  }

  get oda(): number {
    return this._oda;
  }

  get odA_Rank(): number {
    return this._odA_Rank;
  }

  get odd(): number {
    return this._odd;
  }

  get odD_Rank(): number {
    return this._odD_Rank;
  }

  static fromJSON(json: PlayerODJson): PlayerOD {
    const playerOD = new PlayerOD(json.player_Id, json.od, json.oD_Rank, json.oda, json.odA_Rank, json.odd, json.odD_Rank);
    return playerOD;
  }
}
