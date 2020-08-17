/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface Props {
  icon: string;
  onClick?: () => void;
}

const ButtonIcon = styled.button<Props>`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: transparent;
  background-size: 50% 50%;
  border: none;
`;

export default ButtonIcon;
