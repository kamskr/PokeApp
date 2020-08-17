/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

let pokemonColor = '';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const StyledStatName = styled.span`
  color: ${({ theme }) => theme.color[pokemonColor]};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 10px;
  width: 80px;
`;

const StyledEffort = styled.span`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 10px;
  width: 60px;
`;

const StyledSlider = styled.div`
  position: relative;
  /* background-color: red; */
  z-index: 9999;
  width: 100%;
`;
const StyledSliderBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 20px;
  top: -5px;
  height: 10px;
`;

interface StatProps {
  baseStat: number;
}

const StyledSliderActive = styled.div<StatProps>`
  position: absolute;
  left: 0;
  right: ${({ baseStat }) => `${100 - baseStat / 1.3}%`};
  background-color: ${({ theme }) => theme.color[pokemonColor]};
  border-radius: 20px;
  height: 10px;
  top: -5px;
`;

interface StatDisplayProps {
  name?: string;
  effort: number;
  baseStat: number;
  color: string;
}

const StatDisplay: React.FC<StatDisplayProps> = ({
  name,
  effort,
  baseStat,
  color,
}: StatDisplayProps) => {
  pokemonColor = color;
  return (
    <StyledContainer>
      <StyledStatName>{name}</StyledStatName>
      <StyledEffort>00{effort}</StyledEffort>
      <StyledSlider>
        <StyledSliderBase />
        <StyledSliderActive baseStat={baseStat} />
      </StyledSlider>
    </StyledContainer>
  );
};
export default StatDisplay;
