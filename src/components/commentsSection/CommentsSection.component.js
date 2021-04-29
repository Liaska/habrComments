import React from 'react';

import CommentsAside from '../commentsAside/CommentsAside.components';
import Comments from '../comments/Comments.component';

import { SectionContainer } from './CommentsSection.styles';
import { useState } from 'react';

const CommentsSection = () => {
  const [commentators, setCommentators] = useState(new Set());

  return (
    <SectionContainer>
      <Comments setCommentators={setCommentators}></Comments>
      <CommentsAside commentators={commentators}></CommentsAside>
    </SectionContainer>
  );
};

export default CommentsSection;
