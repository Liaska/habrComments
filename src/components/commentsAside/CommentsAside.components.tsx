import React, { FC } from 'react';
import { connect } from 'react-redux';

import { highlightAuthor, IAuthors } from '../../redux/comments/commentsSlice';
import { AppDispatch, RootState } from '../../redux/store';

import {
  AsideBody,
  AsideContainer,
  AsideHeader,
  AsideItem,
  AsideList,
} from './CommentsAside.styles';

type TCommentsAside = {
  authors: IAuthors;
  highlightAuthor: Function;
};

const CommentsAside: FC<TCommentsAside> = ({ authors, highlightAuthor }) => {
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

const mapStateToProps = (state: RootState) => ({
  authors: state.comments.authors,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  highlightAuthor: (author: string) => dispatch(highlightAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsAside);
