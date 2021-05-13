import React, { FC, useState, memo } from 'react';

import {
  LikesDislikesContainer,
  DislikeButton,
  LikesDislikesAmount,
  LikeButton,
} from './LikesDislikes.styled';

interface LikesDislikes {
  likesCount: number;
}

const LikesDislikes: FC<LikesDislikes> = ({ likesCount }) => {
  const [likesCountState, setLikesCountState] = useState(likesCount);

  return (
    <LikesDislikesContainer>
      <DislikeButton onClick={() => setLikesCountState(likesCountState - 1)}>-</DislikeButton>
      <LikesDislikesAmount likesCountState={likesCountState}>{likesCountState}</LikesDislikesAmount>
      <LikeButton onClick={() => setLikesCountState(likesCountState + 1)}>+</LikeButton>
    </LikesDislikesContainer>
  );
};

export default memo(LikesDislikes);
