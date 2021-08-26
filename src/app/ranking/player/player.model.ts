interface PlayerJson {
  player_Id: number;
  name: string;
  tribe_Id: number;
  villageCount: number;
  points: number;
  rank: number;
}
export class Player {
  constructor(
    private _player_Id: number,
    private _name: string,
    private _tribe_Id: number,
    private _villageCount: number,
    private _points: number,
    private _rank: number
    ) {
  }

  get player_Id() {
    return this._player_Id;
  }

  get name(): string {
    return decodeURIComponent(this._name).split("+").join(" ");
  }

  get tribe_Id() {
    return this._tribe_Id;
  }

  get rank(): number {
    return this._rank;
  }

  get points(): number {
    return this._points;
  }

  get villageCount(): number {
    return this._villageCount;
  }

  static fromJSON(json: PlayerJson): Player {
    const player = new Player(json.player_Id, json.name, json.tribe_Id, json.villageCount, json.points, json.rank);
    return player;
  }
}
