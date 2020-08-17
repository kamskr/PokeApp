interface Type {
  name: string;
}

interface Types {
  type: Type;
}

interface Sprite {
  front_default: string;
}

export interface Pokemon {
  name: string;
  sprites: Sprite;
  types: Types[];
}
