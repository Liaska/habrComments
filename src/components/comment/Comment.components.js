import React from 'react';
import LikesDislikes from "../likesDislikes/LikesDislikes.component"


import {
  CommentAuthor,
  CommentCollapse,
  CommentContainer,
  CommentHeader,
  CommentMessage,
} from './Comment.styles';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentCollapse></CommentCollapse>
      <CommentHeader>
        <CommentAuthor>
          
        </CommentAuthor>
        <LikesDislikes></LikesDislikes>
      </CommentHeader>
      <CommentMessage></CommentMessage>
    </CommentContainer>
    );
};

export default Comment;
