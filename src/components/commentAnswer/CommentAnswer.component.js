import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import { openAnswerForm } from '../../redux/comments/commentsSlice';

import { AnswerButton, AnswerContainer, AnswerForm } from './CommentAnswer.styles';

export const CommentAnswer = ({ openedAnswerForm, openAnswerForm, commentAnswerSubmit }) => {
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('');

  const answerRef = useRef();

  return (
    <AnswerContainer ref={answerRef}>
      <AnswerButton
        visibility={answerRef.current === openedAnswerForm ? 'true' : 'false'}
        onClick={() => {
          answerRef.current === openedAnswerForm
            ? openAnswerForm(null)
            : openAnswerForm(answerRef.current);
        }}>
        Ответить
      </AnswerButton>
      <AnswerForm
        onSubmit={(e) => commentAnswerSubmit(e, login, message, openAnswerForm)}
        display={answerRef.current === openedAnswerForm ? 'true' : 'false'}>
        <input
          type='text'
          placeholder='Никнейм'
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <textarea
          name='commentAnswer'
          placeholder='Ответ на комментарий'
          id=''
          cols='30'
          rows='10'
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type='submit'>sub</button>
      </AnswerForm>
    </AnswerContainer>
  );
};

const mapStateToProps = ({ comments: { openedAnswerForm } }) => ({
  openedAnswerForm,
});

const mapDispatchToProps = (dispatch) => ({
  openAnswerForm: (form) => dispatch(openAnswerForm(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentAnswer);
