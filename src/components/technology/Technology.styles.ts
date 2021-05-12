import styled, { css, keyframes } from 'styled-components';

type TGradientActive = {
  toggle: boolean;
}

type TGradient = {
  bgColor: string;
}

export const TechnologyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
`;

export const TechnologyInfo = styled.div`
  background: #fff;
  box-shadow: 15px 0 35px rgb(0 0 0 / 10%), 0 -15px 35px rgb(0 0 0 / 10%),
    0 15px 35px rgb(0 0 0 / 10%);
  width: 50%;
  padding: 35px 40px;
  height: 550px;
`;

export const TechnologyDescription = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dadada;
  & h3 {
    color: #3a3a3a;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

export const TechnologyTypes = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dadada;
  & h3 {
    color: #3a3a3a;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  & .types {
    display: flex;
    align-items: center;
    padding: 8px 0;
    justify-content: space-around;
  }
  & .type {
    cursor: pointer;
    padding: 10px 15px;
    margin: 0 10px;
    transition: 0.5s;
    color: white;
    border-radius: 5px;
    &.active {
      box-shadow: 0 0 10px 0.5px rgb(0 0 0 / 20%);
      transform: scale(1.1);
    }
  }
`;

export const TechnologyShow = styled.div`
  position: relative;
  width: 50%;
  height: 475px;
  box-shadow: -15px 0 35px rgb(0 0 0 / 10%), 0 -15px 35px rgb(0 0 0 / 10%),
    0 15px 35px rgb(0 0 0 / 10%);
  transition: 0.5s;
  height: 475px;

  & h1 {
    color: #fff;
    font-size: 60px;
    left: 0;
    line-height: 0.9;
    opacity: 0.4;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    top: 45px;
    z-index: 2;
  }
`;

const Gradient = css<TGradient>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${(props) => props.bgColor};
`;

const width2 = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const width1 = keyframes`
  from {
    width: 0.1%;
  }
  to {
    width: 100%;
  }
`;



export const GradientActive = styled.div<TGradientActive & TGradient>`
  ${Gradient}
  z-index: 0;
  animation: ${(props) => (props.toggle ? width1 : width2)} 0.8s ease;
`;

export const GradientPrev = styled.div`
  ${Gradient}
`;

export const TechnologyName = styled.div`
  padding: 0 0 10px;
  border-bottom: 1px solid #dadada;

  & h3 {
    color: #444;
    font-weight: 500;
    margin-top: 3px;
    text-transform: capitalize;
  }

  & h1 {
    color: #333;
    font-size: 2rem;
    margin-right: 10px;
    line-height: 1;
  }
`;

export const TechnologyLogo = styled.img`
  bottom: 0;
  position: absolute;
  right: 0;
  left: -50px;
  transform: rotate(-20deg);
  max-width: 100%;
  height: auto;
`;
