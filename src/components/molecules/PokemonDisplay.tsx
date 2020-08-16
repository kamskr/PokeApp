/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

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
  align-items: center;
  span {
    margin: 5px;
  }
`;

interface PokemonDisplayProps {
  imageSource: string;
  name: string;
  elements: Array<string>;
}

const PokemonDisplay: React.FunctionComponent<PokemonDisplayProps> = ({
  imageSource,
  name,
  elements,
}: PokemonDisplayProps) => {
  return (
    <>
      <StyledContainer>
        <StyledContainerInner>
          <img src={imageSource} alt="PokemonFront" />
          <StyledInfoContainer>
            <span>{name}</span>
            <span>001</span>
          </StyledInfoContainer>
          {elements.map((item) => (
            <>
              <img
                // eslint-disable-next-line global-require
                // eslint-disable-next-line import/no-dynamic-require
                src={require(`../../assets/types/small/${item}.svg`)}
                alt="element"
              />
            </>
          ))}
        </StyledContainerInner>
      </StyledContainer>
    </>
  );
};
export default PokemonDisplay;

//             return (
//               <img src="../../assets/types/small/electric.svg" alt="element" />
//             );
