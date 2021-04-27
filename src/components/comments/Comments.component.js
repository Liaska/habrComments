import React, { useState, useEffect } from 'react';
import Comment, { CommentInComments } from '../comment/Comment.component';
import Loading from '../loading/Loading.component';

import COMMENTS_DATA from './Comments.data';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

const Comments = () => {
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsCount, setCommentsCount] = useState(0);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCommentsData(COMMENTS_DATA);
      setCommentsCount(COMMENTS_DATA.length);
    }, 200);
  }, []);

  useEffect(() => {
    setLoadingComments(false);
  }, [commentsData]);

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h2>
          Комментарии <span>{commentsCount}</span>
        </h2>
      </CommentsHeader>
      <LoadingCommentsList isLoading={loadingComments}>
        {commentsData.map((comment) => {
          return <Comment key={comment.id} {...comment} level={0}></Comment>;
        })}
      </LoadingCommentsList>
    </CommentsContainer>
  );
};

export default Comments;
