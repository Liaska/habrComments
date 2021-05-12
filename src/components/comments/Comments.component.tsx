import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import Comment from '../comment/Comment.component';
import Loading from '../loading/Loading.component';
import {
  selectCommentsCollection,
  selectCommentsCount,
  selectCommentsLoading,
} from '../../redux/comments/comments.selects';

import { clearCollection, fetchCommentsStartAsync } from '../../redux/comments/commentsSlice';
import { AppDispatch, RootState } from '../../redux/store';

import { CommentsContainer, CommentsHeader, CommentsList } from './Comments.styles';

const LoadingCommentsList = Loading(CommentsList);

type CommentsProps = {
  commentsCount: number;
  commentsCollection: any[] | null;
  commentsLoading: boolean;
  fetchCommentsStartAsync: Function;
  clearCollection: Function;
  setCommentators: Function;
};

const Comments: FC<CommentsProps> = ({
  commentsCount,
  commentsCollection,
  fetchCommentsStartAsync,
  commentsLoading,
  clearCollection,
  setCommentators,
}) => {
  useEffect(() => {
    if (!commentsCollection) {
      fetchCommentsStartAsync();
    }
    return () => {
      clearCollection();
    };
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
            return <Comment key={comment.id} {...comment} level={1}></Comment>;
          })}
      </LoadingCommentsList>
    </CommentsContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    commentsCount: selectCommentsCount(state),
    commentsCollection: selectCommentsCollection(state),
    commentsLoading: selectCommentsLoading(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCommentsStartAsync: () => dispatch(fetchCommentsStartAsync()),
  clearCollection: () => dispatch(clearCollection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
