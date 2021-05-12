import React, { FC, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { openAnswerForm } from '../../redux/comments/commentsSlice';
import { AppDispatch, RootState } from '../../redux/store';

import { AnswerButton, AnswerContainer, AnswerForm } from './CommentAnswer.styles';

interface ICommentAnswer {
  openedAnswerForm: HTMLElement | null;
  openAnswerForm: Function;
  setNewComments: Function;
}

export const CommentAnswer: FC<ICommentAnswer> = ({ openedAnswerForm, openAnswerForm, setNewComments }) => {
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('');
  const answerRef = useRef() as React.MutableRefObject<HTMLInputElement>;;

  const commentAnswerSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setNewComments((prevState:any[]) => [...prevState, [login, message]]);
    openAnswerForm(null);
    (event.target as HTMLFormElement).reset()
  };

  return (
    <AnswerContainer ref={answerRef}>
      <AnswerButton
        vision={answerRef.current === openedAnswerForm ? 'true' : 'false'}
        onClick={() => {
          answerRef.current === openedAnswerForm
            ? openAnswerForm(null)
            : openAnswerForm(answerRef.current);
        }}>
        Ответить
      </AnswerButton>
      <AnswerForm
        onSubmit={commentAnswerSubmit}
        vision={answerRef.current === openedAnswerForm ? 'true' : 'false'}>
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
          cols={30}
          rows={10}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type='submit'>sub</button>
      </AnswerForm>
    </AnswerContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  openedAnswerForm: state.comments.openedAnswerForm,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  openAnswerForm: (form: HTMLElement) => dispatch(openAnswerForm(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentAnswer);
