import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { PokemonId } from '../types/PokemonId';
import { Pokemon } from '../types/Pokemon';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useSinglePokemonService = ({ id }: PokemonId) => {
  const [result, setResult] = useState<Service<Pokemon>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }));
  }, [id]);

  return result;
};

export default useSinglePokemonService;
