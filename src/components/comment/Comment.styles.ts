import styled from 'styled-components';

export const CommentContainer = styled.div`
  padding-left: 20px;
  position: relative;
`;

export const CommentCollapse = styled.span`
  display: none;
  cursor: pointer;
  position: absolute;
  left: 3px;
  line-height: 8px;
  top: 18px;
  z-index: 9;
  font-weight: 700;
  color: #548eaa;
  font-size: 9px;
  background-color: white;

  ${CommentContainer}:hover > & {
    display: block;
  }
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

export const CommentLevel = styled.span`
  display: none;
  color: #a2c5d5;
  position: absolute;
  top: 14px;
  left: 26px;
  letter-spacing: 15px;
  transform: translateX(-100%);
  min-width: 250px;
  text-align: right;

  ${CommentContainer}:hover > & {
    display: block;
  }
`;

export const CommentMessage = styled.div`
  color: #111;
  font-size: 15px;
  line-height: 1.46;
  overflow: hidden;
`;

export const ShowComment = styled.div`
  font-weight: 700;
  color: #548eaa;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const CommentWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  margin-left: -20px;
  margin-bottom: 10px;

  &.highlightedAuthor {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:hover {
    background-color: rgba(255, 240, 140, 0.1);
  }
`;