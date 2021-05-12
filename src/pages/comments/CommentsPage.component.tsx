import CommentsAside from '../../components/commentsAside/CommentsAside.components';
import Comments from '../../components/comments/Comments.component';

import { CommentsPageContainer } from './CommentsPage.styles';

const CommentsPage = () => {
  return (
    <CommentsPageContainer>
      <Comments></Comments>
      <CommentsAside></CommentsAside>
    </CommentsPageContainer>
  );
};

export default CommentsPage;
