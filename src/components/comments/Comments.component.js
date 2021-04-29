import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Comment from '../comment/Comment.component';
import Loading from '../loading/Loading.component';
import { fetchCommentsStartAsync } from '../../redux/comments/comments.actions';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

const Comments = ({ commentsCount, commentsCollection, fetchCommentsStartAsync, commentsLoading}) => {

  useEffect(() => {
    fetchCommentsStartAsync();
  }, []);

  console.log('RENDER ');

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h2>
          Комментарии <span>{commentsCount}</span>
        </h2>
      </CommentsHeader>
      <LoadingCommentsList isLoading={commentsLoading}>
        {commentsCollection && commentsCollection.map((comment) => {
          return <Comment key={comment.id} {...comment} level={1}></Comment>;
        })}
      </LoadingCommentsList>
    </CommentsContainer>
  );
};

const mapStateToProps = (state) => ({
  commentsCount: state.comments.commentsCount,
  commentsCollection: state.comments.commentsCollection,
  commentsLoading: state.comments.commentsLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartAsync: () => dispatch(fetchCommentsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
