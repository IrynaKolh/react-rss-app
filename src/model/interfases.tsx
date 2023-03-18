export type SearchState = {
  inputText: string;
};

export type SearchPropsType = {
  props: string;
};

export type CardsState = {
  data: Character[];
  error: string;
};

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

type Location = {
  name: string;
  url: string;
};
