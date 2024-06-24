export interface ICity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

export interface IState {
  id: number;
  name: string;
  iso2: string;
}

export interface ICountry {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  phonecode: string;
  capital: string;
  currency: string;
  native: string;
  emoji: string;
}
