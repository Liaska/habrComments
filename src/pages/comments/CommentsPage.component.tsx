import React, { useState } from 'react';
import CommentsAside from '../../components/commentsAside/CommentsAside.components';
import Comments from '../../components/comments/Comments.component';

import { CommentsPageContainer } from './CommentsPage.styles';

interface ICommentators {
  [author: string]: any[];
}

const CommentsPage = () => {
  const [commentators, setCommentators] = useState<ICommentators>({});

  return (
    <CommentsPageContainer>
      <Comments setCommentators={setCommentators}></Comments>
      <CommentsAside commentators={commentators}></CommentsAside>
    </CommentsPageContainer>
  );
};

export default CommentsPage;
