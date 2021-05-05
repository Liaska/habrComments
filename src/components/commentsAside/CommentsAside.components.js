import React from 'react';
import { connect } from 'react-redux';

import { highlightAuthor } from '../../redux/comments/commentsSlice'

import {
  AsideBody,
  AsideContainer,
  AsideHeader,
  AsideItem,
  AsideList,
} from './CommentsAside.styles';

const CommentsAside = ({ authors, highlightAuthor }) => {
  return (
    <AsideContainer>
      <AsideHeader>Комментаторы</AsideHeader>
      <AsideBody>
        <AsideList>
          {Object.entries(authors).map(([author, messages], index) => {
            return (
              <AsideItem key={index} onClick={() => highlightAuthor(author)}>
                Автор - {author} <br />
                Количество сообщений - {messages.length}
              </AsideItem>
            );
          })}
        </AsideList>
      </AsideBody>
    </AsideContainer>
  );
};

const mapStateToProps = ({ comments: { authors } }) => ({
  authors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  highlightAuthor: (author) => dispatch(highlightAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsAside);
