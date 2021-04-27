import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5dddf;
  position: sticky;
  margin-bottom: 20px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
`;

export const HeaderNavItem = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  color: #909090;
  font-weight: 500;
  font-size: 14px;
  padding: 0 25px;

  &:hover {
    color: #5096b1;
  }
`;
