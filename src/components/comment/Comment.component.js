import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import LikesDislikes from '../likesDislikes/LikesDislikes.component';
import CommentAnswer from '../commentAnswer/CommentAnswer.component';
import {
  addAuthor,
  commentsCountIncrement,
  openAnswerForm,
} from '../../redux/comments/comments.actions';

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

const Comment = ({
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

  const commentAnswerSubmit = (event, author, message, resetAnswerTarget) => {
    event.preventDefault();
    setNewComments((prevState) => [...prevState, [author, message]]);
    resetAnswerTarget(null);
    event.target.reset();
  };

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
            <LikesDislikes likesCount={likes} />
          </CommentHeader>
          <CommentMessage>{message}</CommentMessage>
          <CommentAnswer commentAnswerSubmit={commentAnswerSubmit}></CommentAnswer>
        </CommentWrapper>
        {newComments.length > 0 &&
          newComments.map((newComment) => {
            console.log(newComments, newComment);
            return (
              <Comment
                key={newComment[1]}
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

const mapStateToProps = ({ comments: { openedAnswerForm } }) => ({
  openedAnswerForm,
});

const mapDispatchToProps = (dispatch) => ({
  commentsCountIncrement: () => dispatch(commentsCountIncrement()),
  addAuthor: (author, message) => dispatch(addAuthor(author, message)),
  openAnswerForm: (form) => dispatch(openAnswerForm(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
