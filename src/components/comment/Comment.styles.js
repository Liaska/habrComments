import styled, { css } from 'styled-components';

export const CommentContainer = styled.div`
  padding-left: 20px;
`;

export const CommentCollapse = styled.span`
  display: none;
  cursor: pointer;
  position: absolute;
  left: -17px;
  line-height: 8px;
  top: 7px;
  z-index: 9;
  padding-left: 17px;
  font-weight: 700;
  color: #548eaa;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;
`;

export const CommentAuthor = styled.a`
  display: inline-flex;
  align-items: center;
`;

export const CommentMessage = styled.div`
  color: #111;
  font-size: 15px;
  line-height: 1.46;
  overflow: hidden;
`;
