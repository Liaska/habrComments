import styled from 'styled-components';
import { CommentWrapper } from '../comment/Comment.styles';

type Tvision = {
  vision: string;
  children?: JSX.Element|JSX.Element[] | string;
};

export const AnswerContainer = styled.div``;

const display = (displayState: string) => {
  return displayState === 'true' ? 'flex' : 'none';
};

const visibility = (visibilityState: string) => {
  return visibilityState === 'true' ? 'visible' : 'hidden';
};

export const AnswerButton = styled.button<Tvision>`
  visibility: ${(props) => visibility(props.vision)};

  ${CommentWrapper}:hover & {
    visibility: visible;
  }
`;

export const AnswerForm = styled.form<Tvision>`
  display: ${(props) => display(props.vision)};
  flex-direction: column;
  margin-top: 10px;

  & textarea {
    margin-top: 10px;
    max-height: 80px;
    resize: none;
  }
`;
