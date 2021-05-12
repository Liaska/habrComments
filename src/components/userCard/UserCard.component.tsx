import { FC } from 'react';

import { DisplayName, StyledContainer, Email } from './UserCard.styles';

type UserCardProps = {
  displayName: string;
  email: string;
};

const UserCard: FC<UserCardProps> = ({ displayName, email }) => (
  <StyledContainer>
    <DisplayName>{displayName}</DisplayName>
    <Email>{email}</Email>
  </StyledContainer>
);

export default UserCard;
