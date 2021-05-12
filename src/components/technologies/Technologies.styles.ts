import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const TechnologiesContainer = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
`;
export const TechnologiesList = styled.ul`
  list-style: none;
  display: grid;
  justify-content: space-around;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 250px);
`;

type TTechnology = {
  bg: string;
}

export const Technology = styled(Link)<TTechnology>`
  padding: 25px;
  border-radius: 5px;
  border: 1px solid black;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.bg});
`;
