import React, { useEffect, useState, useRef, FC } from 'react';
import { connect } from 'react-redux';
import LikesDislikes from '../likesDislikes/LikesDislikes.component';
import CommentAnswer from '../commentAnswer/CommentAnswer.component';

import {
  commentsCountIncrement,
  openAnswerForm,
  addAuthor,
} from '../../redux/comments/commentsSlice';

import {
  CommentAuthor,
  CommentCollapse,
  CommentContainer,
  CommentHeader,
  CommentMessage,
  CommentLevel,
  ShowComment,
  CommentWrapper,
} from './Comment.styles';
import { TCommentsData } from '../../redux/InterfacesAndTypes';
import { AppDispatch, RootState } from '../../redux/store';

interface IComment {
  author: string;
  likes?: number;
  message: string;
  children?: TCommentsData;
  commentsCountIncrement: Function;
  addAuthor: Function;
  highlightedAuthor: any;
  level: number;
}

const Comment: FC<IComment> = ({
  author,
  likes,
  message,
  children,
  level,
  commentsCountIncrement,
  addAuthor,
  highlightedAuthor,
}) => {
  const [showComments, setShowComment] = useState(true);
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    commentsCountIncrement();
    addAuthor(author, message);
  }, []);

  const intervalRef = useRef();

  return (
    <div>
      <CommentContainer style={showComments ? { display: 'block' } : { display: 'none' }}>
        <CommentCollapse onClick={() => setShowComment(false)}>◯</CommentCollapse>
        <CommentLevel>{'•'.repeat(level)}</CommentLevel>
        <CommentWrapper className={highlightedAuthor === author ? `highlightedAuthor` : ''}>
          <CommentHeader>
            <CommentAuthor>{author}</CommentAuthor>
            <LikesDislikes likesCount={likes || 0} />
          </CommentHeader>
          <CommentMessage>{message}</CommentMessage>
          <CommentAnswer setNewComments={setNewComments}></CommentAnswer>
        </CommentWrapper>
        {newComments.length > 0 &&
          newComments.map((newComment, index) => {
            return (
              <Comment
                key={index}
                highlightedAuthor={highlightedAuthor}
                commentsCountIncrement={commentsCountIncrement}
                addAuthor={addAuthor}
                level={level + 1}
                author={newComment[0]}
                message={newComment[1]}></Comment>
            );
          })}

        {children &&
          children.length > 0 &&
          children.map((childComment) => {
            return (
              <Comment
                key={childComment.id}
                highlightedAuthor={highlightedAuthor}
                commentsCountIncrement={commentsCountIncrement}
                addAuthor={addAuthor}
                level={level + 1}
                {...childComment}></Comment>
            );
          })}
      </CommentContainer>
      <ShowComment
        style={showComments ? { display: 'none' } : { display: 'block' }}
        onClick={() => setShowComment(true)}>
        ⊙ Раскрыть ветку
      </ShowComment>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  highlightedAuthor: state.comments.highlightedAuthor,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  commentsCountIncrement: () => dispatch(commentsCountIncrement()),
  addAuthor: (author: string, message: string) => dispatch(addAuthor({author, message})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
