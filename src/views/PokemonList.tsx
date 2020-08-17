/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/atoms/Navbar';
import PokemonDisplay from '../components/molecules/PokemonDisplay';

const StyledContainer = styled.div`
  width: 100%;
`;

const PokemonList: React.FC = () => {
  const rows = [];
  const numrows = 10;

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= numrows; i++) {
    rows.push(<PokemonDisplay id={i} />);
  }
  return (
    <StyledContainer>
      <Navbar text="Pokemon" />
      {rows}
    </StyledContainer>
  );
};
export default PokemonList;
