export type SearchState = {
  inputText: string;
};

export type SearchPropsType = {
  props: string;
};

export type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardsState = {
  data: Character[];
};

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode?: Array<string>;
  url?: string;
  created: string;
}

type Location = {
  name: string;
  url?: string;
};

export interface FormProps {
  callback: (a: Character) => void;
}

export type FormFilds = {
  name: string;
  birthday: string;
  status: string;
  gender: string;
  location: string;
  species: boolean;
  img: FileList | null;
};

export type FormError = {
  errors: {
    name: string;
    birthday: string;
    status: string;
    gender: string;
    location: string;
    species: string;
    img: string;
  };
  isValid: boolean;
};
