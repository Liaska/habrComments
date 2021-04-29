import React from 'react';
import { connect } from 'react-redux';

import {
  AsideBody,
  AsideContainer,
  AsideHeader,
  AsideItem,
  AsideList,
} from './CommentsAside.styles';

const CommentsAside = ({ commentsAuthors }) => {
  return (
    <AsideContainer>
      <AsideHeader>Комментаторы</AsideHeader>
      <AsideBody>
        <AsideList>
          {Object.entries(commentsAuthors).map(([author, messages], index) => {
            return (
              <AsideItem key={index}>
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

export default connect(mapStateToProps)(CommentsAside);
