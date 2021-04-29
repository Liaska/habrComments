import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch} from 'react-redux';
import LikesDislikes from '../likesDislikes/LikesDislikes.component';
import { addAuthor, commentsCountIncrement } from '../../redux/comments/comments.actions';

import {
  CommentAuthor,
  CommentCollapse,
  CommentContainer,
  CommentHeader,
  CommentMessage,
  CommentLevel,
  ShowComment,
} from './Comment.styles';

const Comment = ({
  author,
  likes,
  message,
  children,
  level,
  commentsCountIncrement,
  addAuthor,
}) => {
  const [showComments, setShowComment] = useState(true);

  useEffect(() => {
    commentsCountIncrement();
    addAuthor(author, message);
  }, []);

  return (
    <div>
      <CommentContainer style={showComments ? { display: 'block' } : { display: 'none' }}>
        <CommentCollapse onClick={() => setShowComment(false)}>◯</CommentCollapse>
        <CommentLevel>{'•'.repeat(level)}</CommentLevel>
        <CommentHeader>
          <CommentAuthor>{author}</CommentAuthor>
          <LikesDislikes likesCount={likes} />
        </CommentHeader>
        <CommentMessage>{message}</CommentMessage>
        {children.length > 0 &&
          children.map((childComment) => {
            return (
              <Comment
                key={childComment.id}
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

const mapDispatchToProps = (dispatch) => ({
  commentsCountIncrement: () => dispatch(commentsCountIncrement()),
  addAuthor: (author, message) => dispatch(addAuthor(author, message)),
});

export default connect(null, mapDispatchToProps)(Comment);
