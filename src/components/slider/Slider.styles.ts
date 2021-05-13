import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  transition: 0.7s ease left;
`;
const SliderButton = css`
  position: absolute;
  top: 50%;
  display: block;
  width: 15px;
  height: 15px;
  font-size: 12px;
  padding: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
  z-index: 1;
`;
export const SliderBack = styled.button`
  ${SliderButton}
  left: 0px;
`;
export const SliderNext = styled.button`
  ${SliderButton}
  right: 0px;
`;
