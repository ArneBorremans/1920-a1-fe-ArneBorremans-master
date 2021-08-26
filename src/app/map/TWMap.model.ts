export class TWMap {
  constructor(
    private _height: Number,
    private _width: Number,
    private _color: String,
    private _urlMap: String) {}

  get height(): Number {
    return this._height;
  }

  get width(): Number {
    return this._width;
  }

  get color(): String {
    return this._color;
  }

  get urlMap(): String {
    return this._urlMap;
  }
}
