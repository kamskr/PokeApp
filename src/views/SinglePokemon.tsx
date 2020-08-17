/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../components/atoms/ButtonIcon';
import { Pokemon } from '../types/Pokemon';
import StatDisplay from '../components/molecules/StatDisplay';

interface Props {
  pokemonColor: string;
}

const StyledContainer = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: ${({ theme, pokemonColor }) => theme.color[pokemonColor]};
  animation-name: slideup;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  @keyframes slideup {
    0% {
      top: 100vh;
    }
    100% {
      top: 0;
    }
  }
`;

const StyledContainerInner = styled.div`
  position: relative;
  margin-top: -50px;
  padding-top: 50px;
  text-align: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
`;

const StyledContainerStats = styled.div`
  margin-top: 100px;
`;

const StyledImage = styled.img`
  width: 50vw;
  margin: 50px 0 20px 0;
  z-index: 9999;
`;

const StyledName = styled.h2`
  margin: 5px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.darkGrey};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
`;

const statShortName = {
  HPP: 'hp',
  ATK: 'attack',
  DEF: 'defense',
  SAK: 'special-attack',
  SDF: 'special-defense',
  SPD: 'speed',
};

const SinglePokemon: React.FC<Pokemon> = ({
  name,
  sprites,
  types,
  stats,
  onPokemonClose,
}: Pokemon) => {
  function getKeyByValue(
    object: {
      [x: string]: unknown;
      HPP?: string;
      ATK?: string;
      DEF?: string;
      SAK?: string;
      SDF?: string;
      SPD?: string;
    },
    value: string
  ) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  return (
    <StyledContainer pokemonColor={types[0].type.name}>
      <StyledButtonIcon
        icon={require('../assets/closeIcon.svg')}
        onClick={onPokemonClose}
      />
      <StyledImage
        src={sprites.other.dream_world.front_default}
        alt="SinglePokemon"
      />
      <StyledContainerInner>
        <StyledName>{name}</StyledName>
        {types.map((type, index) => (
          <img
            // eslint-disable-next-line global-require
            // eslint-disable-next-line import/no-dynamic-require
            src={require(`../assets/types/big/${type.type.name}.svg`)}
            alt="element"
            key={index}
          />
        ))}
        <StyledContainerStats>
          {stats &&
            stats.map((stat, index) => (
              <StatDisplay
                name={getKeyByValue(statShortName, stat.stat.name)}
                effort={stat.effort}
                baseStat={stat.base_stat}
                color={types[0].type.name}
                key={index}
              />
            ))}
        </StyledContainerStats>
      </StyledContainerInner>
    </StyledContainer>
  );
};
export default SinglePokemon;
