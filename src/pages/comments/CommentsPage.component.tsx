import React, { useState } from 'react';
import CommentsAside from '../../components/commentsAside/CommentsAside.components';
import Comments from '../../components/comments/Comments.component';

import { CommentsPageContainer } from './CommentsPage.styles';

const CommentsPage = () => {
  const [commentators, setCommentators] = useState(new Set());

  return (
    <CommentsPageContainer>
      <Comments setCommentators={setCommentators}></Comments>
      <CommentsAside commentators={commentators}></CommentsAside>
    </CommentsPageContainer>
  );
};

export default CommentsPage;
