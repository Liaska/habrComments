import styled from 'styled-components';

export const CommentsContainer = styled.div`
  width: 100%;
  margin-left: -20px;
`;

export const CommentsHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;

  & span {
    color: #548eaa;
  }
`;

export const CommentsList = styled.ul`
  overflow: hidden;
`;

export const CommentsItem = styled.ul`
  overflow: hidden;
`;
