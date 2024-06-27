export class CropDTO{
  private _N: string;
  private _P: string;
  private _K: string;
  private _temperature : string;
  private _humidity : string;
  private _ph : string;
  private _rainfall : string;


  constructor(N: string, P: string, K: string, temperature: string, humidity: string, ph: string, rainfall: string) {
    this._N = N;
    this._P = P;
    this._K = K;
    this._temperature = temperature;
    this._humidity = humidity;
    this._ph = ph;
    this._rainfall = rainfall;
  }


  get N(): string {
    return this._N;
  }

  set N(value: string) {
    this._N = value;
  }

  get P(): string {
    return this._P;
  }

  set P(value: string) {
    this._P = value;
  }

  get K(): string {
    return this._K;
  }

  set K(value: string) {
    this._K = value;
  }

  get temperature(): string {
    return this._temperature;
  }

  set temperature(value: string) {
    this._temperature = value;
  }

  get humidity(): string {
    return this._humidity;
  }

  set humidity(value: string) {
    this._humidity = value;
  }

  get ph(): string {
    return this._ph;
  }

  set ph(value: string) {
    this._ph = value;
  }

  get rainfall(): string {
    return this._rainfall;
  }

  set rainfall(value: string) {
    this._rainfall = value;
  }
}
