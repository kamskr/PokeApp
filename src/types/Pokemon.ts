interface Type {
  name: string;
}

interface Types {
  type: Type;
}
interface DreamWorld {
  front_default: string;
}
interface Other {
  dream_world: DreamWorld;
}

interface Sprite {
  front_default: string;
  other: Other;
}

export interface Pokemon {
  name: string;
  sprites: Sprite;
  types: Types[];
  onPokemonClose?: () => void;
}
