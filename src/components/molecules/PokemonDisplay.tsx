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
    <StyledContainer>
      <StyledContainerInner>
        <img src={imageSource} alt="PokemonFront" />
        <StyledInfoContainer>
          <h2>{name}</h2>
          <span>#001</span>
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
  );
};
export default PokemonDisplay;
