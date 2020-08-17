/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../components/atoms/ButtonIcon';
import { Pokemon } from '../types/Pokemon';

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: ${({ theme }) => theme.color.water};
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

const SinglePokemon: React.FC<Pokemon> = ({
  name,
  sprites,
  types,
  onPokemonClose,
}: Pokemon) => {
  return (
    <StyledContainer>
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
        {types.map((type) => (
          <img
            // eslint-disable-next-line global-require
            // eslint-disable-next-line import/no-dynamic-require
            src={require(`../assets/types/small/${type.type.name}.svg`)}
            alt="element"
          />
        ))}
      </StyledContainerInner>
    </StyledContainer>
  );
};
export default SinglePokemon;
