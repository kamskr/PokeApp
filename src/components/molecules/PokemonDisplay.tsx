/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React, { useState } from 'react';
import styled from 'styled-components';
import useSinglePokemonService from '../../hooks/useSinglePokemonService';
import { PokemonId } from '../../types/PokemonId';
import SinglePokemon from '../../views/SinglePokemon';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
`;

const StyledContainerInner = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.lightGrey};
  img {
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  h2 {
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.darkGrey};
  }
  span {
    margin: 5px;
    color: ${({ theme }) => theme.color.grey};
  }
`;

const PokemonDisplay: React.FC<PokemonId> = (id: PokemonId) => {
  const service = useSinglePokemonService(id);
  const [singleOpen, setSingleOpen] = useState(true);

  const onPokemonOpen = () => {
    setSingleOpen(true);
  };

  const onPokemonClose = () => {
    setSingleOpen(false);
  };

  return (
    <>
      <StyledContainer>
        {service.status === 'loading' && <div>Loading...</div>}
        {
          // eslint-disable-next-line no-console
          service.status === 'loaded' && (
            <>
              <StyledContainerInner onClick={onPokemonOpen}>
                <img
                  src={service.payload.sprites.front_default}
                  alt="PokemonFront"
                />
                <StyledInfoContainer>
                  <h2>{service.payload.name}</h2>
                  <span>#{id.id}</span>
                </StyledInfoContainer>
                {service.payload.types.map((type, index) => (
                  <img
                    // eslint-disable-next-line global-require
                    // eslint-disable-next-line import/no-dynamic-require
                    src={require(`../../assets/types/small/${type.type.name}.svg`)}
                    alt="element"
                    key={index}
                  />
                ))}
              </StyledContainerInner>
              {singleOpen && (
                <SinglePokemon
                  name={service.payload.name}
                  sprites={service.payload.sprites}
                  types={service.payload.types}
                  stats={service.payload.stats}
                  onPokemonClose={onPokemonClose}
                />
              )}
            </>
          )
        }
      </StyledContainer>
    </>
  );
};
export default PokemonDisplay;
