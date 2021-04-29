import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Comment from '../comment/Comment.component';
import Loading from '../loading/Loading.component';
import { fetchCommentsStartAsync } from '../../redux/comments/commentsSlice';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

const Comments = ({
  commentsCount,
  commentsCollection,
  fetchCommentsStartAsync,
  commentsLoading,
  highlightedAuthor,
}) => {

  useEffect(() => {
    fetchCommentsStartAsync();
  }, []);

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h2>
          Комментарии <span>{commentsCount}</span>
        </h2>
      </CommentsHeader>
      <LoadingCommentsList isLoading={commentsLoading}>
        {commentsCollection &&
          commentsCollection.map((comment) => {
            return (
              <Comment
                key={comment.id}
                {...comment}
                highlightedAuthor={highlightedAuthor}
                level={1}></Comment>
            );
          })}
      </LoadingCommentsList>
    </CommentsContainer>
  );
};

const mapStateToProps = ({
  comments: { commentsCount, commentsLoading, commentsCollection, highlightedAuthor },
}) => ({
  commentsCount,
  commentsCollection,
  commentsLoading,
  highlightedAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartAsync: () => dispatch(fetchCommentsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
