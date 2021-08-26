interface TribeODJson {
  tribe_Id: number;
  od: number;
  oD_Rank: number;
  oda: number;
  odA_Rank: number;
  odd: number;
  odD_Rank: number;
}
export class TribeOD {
  constructor(
    private _tribe_Id: number,
    private _od: number,
    private _oD_Rank: number,
    private _oda: number,
    private _odA_Rank: number,
    private _odd: number,
    private _odD_Rank: number) {
  }

  get tribe_Id(): number {
    return this._tribe_Id;
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

  static fromJSON(json: TribeODJson): TribeOD {
    const tribeOD = new TribeOD(json.tribe_Id, json.od, json.oD_Rank, json.oda, json.odA_Rank, json.odd, json.odD_Rank);
    return tribeOD;
  }
}
