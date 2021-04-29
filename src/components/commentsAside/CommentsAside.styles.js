import styled from 'styled-components';

export const AsideContainer = styled.aside`
  margin-left: 15px;
  position: sticky;
  background: #f7f7f7;
  border-radius: 4px;
  padding: 15px;
  max-width: 300px;
  width: 100%;
`;

export const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #d5dddf;

  color: #505c66;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 13px;
  line-height: 50px;
  margin: 0;
`;

export const AsideBody = styled.div``;

export const AsideList = styled.ul`
  overflow-y: auto;
  list-style: none;
`;

export const AsideItem = styled.li`
  padding: 9px 0 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid;
  }

  & a {
    color: #444;
  }
`;
