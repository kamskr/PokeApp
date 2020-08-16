/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import usePostPokemonService from '../hooks/usePostPokemonService';
import Navbar from '../components/atoms/Navbar';

const StyledContainer = styled.div`
  width: 100%;
`;

const PokemonDisplay: React.FC = () => {
  const service = usePostPokemonService();

  return (
    <StyledContainer>
      <Navbar text="Pokemon" />
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <span>{item.name}</span>
          </li>
        ))}

      {}
    </StyledContainer>
  );
};
export default PokemonDisplay;
