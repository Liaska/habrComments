import styled, { keyframes } from 'styled-components';

const AppLogoSpin = keyframes`from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

export const PostCSSContainer = styled.div`
  text-align: center;
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
  width: 200px;
`;
