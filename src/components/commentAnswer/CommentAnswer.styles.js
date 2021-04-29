import styled from "styled-components"
import {CommentWrapper} from "../comment/Comment.styles"

export const AnswerContainer = styled.div``;

const display = (displayState) => {
  return displayState === "true" ? 'flex' : 'none';
};

const visibility = (visibilityState) => {
  return visibilityState === "true" ? 'visible' : 'hidden';
};

export const AnswerButton = styled.button`
  visibility: ${(props) => visibility(props.visibility)};

  ${CommentWrapper}:hover & {
    visibility: visible;
  }
`;

export const AnswerForm = styled.form`
  display: ${(props) => display(props.display)};
  flex-direction: column;
  margin-top: 10px;

  & textarea {
    margin-top: 10px;
    max-height: 80px;
    resize: none;
  }
`;