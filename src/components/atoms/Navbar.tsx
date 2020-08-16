/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 200px;
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
      <StyledSpan>{text}</StyledSpan>
    </StyledContainer>
  );
};
export default Navbar;
