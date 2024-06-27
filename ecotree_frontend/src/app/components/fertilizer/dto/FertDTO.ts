export class FertDTO{
  private _Nitrogen: string;
  private _Phosphorous: string;
  private _Potassium: string;
  private _Temparature : string;
  private _Humidity : string;
  private _Moisture : string;
  private _soil_type : string;
  private _crop_type : string;


  constructor(Nitrogen: string, Phosphorous: string, Potassium: string, Temparature: string, Humidity: string, Moisture: string, soil_type: string, crop_type: string) {
    this._Nitrogen = Nitrogen;
    this._Phosphorous = Phosphorous;
    this._Potassium = Potassium;
    this._Temparature = Temparature;
    this._Humidity = Humidity;
    this._Moisture = Moisture;
    this._soil_type = soil_type;
    this._crop_type = crop_type;
  }

  get Nitrogen(): string {
    return this._Nitrogen;
  }

  set Nitrogen(value: string) {
    this._Nitrogen = value;
  }

  get Phosphorous(): string {
    return this._Phosphorous;
  }

  set Phosphorous(value: string) {
    this._Phosphorous = value;
  }

  get Potassium(): string {
    return this._Potassium;
  }

  set Potassium(value: string) {
    this._Potassium = value;
  }

  get Temparature(): string {
    return this._Temparature;
  }

  set Temparature(value: string) {
    this._Temparature = value;
  }

  get Humidity(): string {
    return this._Humidity;
  }

  set Humidity(value: string) {
    this._Humidity = value;
  }

  get Moisture(): string {
    return this._Moisture;
  }

  set Moisture(value: string) {
    this._Moisture = value;
  }

  get soil_type(): string {
    return this._soil_type;
  }

  set soil_type(value: string) {
    this._soil_type = value;
  }

  get crop_type(): string {
    return this._crop_type;
  }

  set crop_type(value: string) {
    this._crop_type = value;
  }
}
