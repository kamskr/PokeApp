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

interface Stat {
  name: string;
}

interface Stats {
  [x: string]: any;
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Pokemon {
  name: string;
  sprites: Sprite;
  types: Types[];
  stats?: Stats[];
  onPokemonClose?: () => void;
}
