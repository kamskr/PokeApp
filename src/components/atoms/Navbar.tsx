/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
`;

const StyledContainerInner = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background: linear-gradient(
    0.25turn,
    ${({ theme }) => theme.color.gradient1light},
    ${({ theme }) => theme.color.gradient2light},
    ${({ theme }) => theme.color.gradient3light},
    ${({ theme }) => theme.color.gradient4light}
  );
`;

const StyledBar = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    0.25turn,
    ${({ theme }) => theme.color.gradient1},
    ${({ theme }) => theme.color.gradient2},
    ${({ theme }) => theme.color.gradient3},
    ${({ theme }) => theme.color.gradient4}
  );
`;

const StyledSpan = styled.span``;

interface NavbarProps {
  text: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  text,
}: NavbarProps) => {
  return (
    <StyledContainer>
      <StyledContainerInner>
        <StyledSpan>{text}</StyledSpan>
      </StyledContainerInner>
      <StyledBar />
    </StyledContainer>
  );
};
export default Navbar;
