import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

interface Pokemon {
  name: string;
}

interface Pokemons {
  pokemons: Pokemon[];
}

const usePostStarshipService = () => {
  const [result, setResult] = useState<Service<Pokemons>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostStarshipService;
