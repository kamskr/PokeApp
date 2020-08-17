/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import useSinglePokemonService from '../../hooks/useSinglePokemonService';
import { PokemonId } from '../../types/PokemonId';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
`;

const StyledContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.lightGrey};
  img {
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
  return (
    <StyledContainer>
      {service.status === 'loading' && <div>Loading...</div>}
      {
        // eslint-disable-next-line no-console
        service.status === 'loaded' && (
          <StyledContainerInner>
            <img
              src={service.payload.sprites.front_default}
              alt="PokemonFront"
            />
            <StyledInfoContainer>
              <h2>{service.payload.name}</h2>
              <span>#{id.id}</span>
            </StyledInfoContainer>
            {service.payload.types.map((type) => (
              <>
                <img
                  // eslint-disable-next-line global-require
                  // eslint-disable-next-line import/no-dynamic-require
                  src={require(`../../assets/types/small/${type.type.name}.svg`)}
                  alt="element"
                />
              </>
            ))}
          </StyledContainerInner>
        )
      }
    </StyledContainer>
  );
};
export default PokemonDisplay;
