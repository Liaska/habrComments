import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const DisplayName = styled.h2`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Email = styled.p`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
