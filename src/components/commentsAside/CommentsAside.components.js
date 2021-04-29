import React from 'react';
import { connect } from 'react-redux';

import { highlightAuthor } from '../../redux/comments/comments.actions';

import {
  AsideBody,
  AsideContainer,
  AsideHeader,
  AsideItem,
  AsideList,
} from './CommentsAside.styles';

const CommentsAside = ({ commentsAuthors, highlightAuthor }) => {
  return (
    <AsideContainer>
      <AsideHeader>Комментаторы</AsideHeader>
      <AsideBody>
        <AsideList>
          {Object.entries(commentsAuthors).map(([author, messages], index) => {
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

const mapStateToProps = ({ comments: { commentsAuthors } }) => ({
  commentsAuthors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  highlightAuthor: (author) => dispatch(highlightAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsAside);
