import React, { useState } from 'react';
import LikesDislikes from '../likesDislikes/LikesDislikes.component';

import {
  CommentAuthor,
  CommentCollapse,
  CommentContainer,
  CommentHeader,
  CommentMessage,
  CommentLevel,
} from './Comment.styles';

const Comment = ({ author, likes, message, children, level }) => {
  return (
    <CommentContainer>
      <CommentCollapse />
      <CommentLevel>{'•'.repeat(level)}</CommentLevel>
      <CommentHeader>
        <CommentAuthor>{author}</CommentAuthor>
        <LikesDislikes likesCount={likes} />
      </CommentHeader>
      <CommentMessage>{message}</CommentMessage>
      {children.length > 0 &&
        children.map((childComment) => {
          return <Comment key={childComment.id} {...childComment} level={level + 1}></Comment>;
        })}
    </CommentContainer>
  );
};

export default Comment;
