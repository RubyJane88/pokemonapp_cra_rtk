export interface Result {
  name: string;
  url: string;
}

export interface PokemonModel {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
