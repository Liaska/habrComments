import React, { useState, useEffect } from 'react';

import Loading from '../loading/Loading.component';

import COMMENTS_DATA from './Comments.data';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

const Comments = () => {
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsCount, setCommentsCount] = useState(0);
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCommentsData(COMMENTS_DATA);
      setCommentsCount(COMMENTS_DATA.length);
      setLoadingComments(false)
    }, 20000);
  }, []);

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h2>
          Комментарии <span>{commentsCount}</span>
        </h2>
      </CommentsHeader>
      <LoadingCommentsList isLoading={loadingComments}></LoadingCommentsList>
    </CommentsContainer>
  );
};

export default Comments;
