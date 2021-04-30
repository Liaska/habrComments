import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Comment from '../comment/Comment.component';
import Loading from '../loading/Loading.component';

import {
  selectCommentsCollection,
  selectCommentsCount,
  selectCommentsLoading,
} from '../../redux/comments/comments.selects';

import { fetchCommentsStartAsync } from '../../redux/comments/commentsSlice';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

const Comments = ({
  commentsCount,
  commentsCollection,
  fetchCommentsStartAsync,
  commentsLoading,
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
                level={1}></Comment>
            );
          })}
      </LoadingCommentsList>
    </CommentsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    commentsCount: selectCommentsCount(state, state.comments),
    commentsCollection: selectCommentsCollection(state, state.comments),
    commentsLoading: selectCommentsLoading(state, state.comments),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartAsync: () => dispatch(fetchCommentsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
