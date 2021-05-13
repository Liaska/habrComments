import styled, { css } from 'styled-components';

export const LikesDislikesContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const LikeDislikeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 20px;
`;

export const LikeButton = styled.button`
  ${LikeDislikeButton}
  color: green;
`;

export const DislikeButton = styled.button`
  ${LikeDislikeButton}
  color: red;
`;

export const LikesDislikesAmount = styled.span<{
  likesCountState: number;
}>`
  color: ${(props) => (props.likesCountState >= 0 ? '#6c9007' : 'red')};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  font-weight: 700;
  font-size: 13px;
`;
