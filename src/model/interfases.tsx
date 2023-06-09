export type SearchState = {
  inputText: string;
};

export type SearchPropsType = {
  props: string;
};

export type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardsState = {
  cardsList: Character[];
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
  onSubmit: (a: Character) => void;
}

export type FormFilds = {
  name: string;
  created: string;
  status: string;
  gender: string;
  location: string;
  species: boolean;
  image: FileList | null;
};

export type FormError = {
  errors: {
    name: string;
    birthday: string;
    status: string;
    gender: string;
    location: string;
    species: string;
    image: string;
  };
  isValid: boolean;
};

export type SortType = 'name' | 'created';

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  data: Character;
};

export type CardProps = {
  card: Character;
  onClick: () => void;
};

export type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ApiResponce = {
  info: {
    count: number;
    pages: number;
  };
  results: Required<Character>[];
  error: string;
};
