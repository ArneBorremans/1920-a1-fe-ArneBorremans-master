interface TribeJson {
  tribe_Id: number;
  tag: string;
  rank: number;
  allPoints: number;
  memberCount: number;
  villageCount: number;
}
export class Tribe {
  constructor(
    private _tribe_Id: number,
    private _tag: string,
    private _rank: number,
    private _allPoints: number,
    private _memberCount: number,
    private _villageCount: number) {

  }
  
  get tribe_Id() {
    return this._tribe_Id;
  }

  get name(): string {
    return decodeURIComponent(this._tag).split("+").join(" ");
  }

  get rank(): number {
    return this._rank;
  }

  get allPoints(): number {
    return this._allPoints;
  }

  get memberCount(): number {
    return this._memberCount;
  }

  get villageCount(): number {
    return this._villageCount;
  }

  static fromJSON(json: TribeJson): Tribe {
    const tribe = new Tribe(json.tribe_Id, json.tag, json.rank, json.allPoints, json.memberCount, json.villageCount);
    return tribe;
  }
}
