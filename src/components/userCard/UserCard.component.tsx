import React from 'react';

import {DisplayName, StyledContainer, Email} from './UserCard.styles';

const UserCard = ({displayName, email}) => (
  <StyledContainer>
    <DisplayName>{displayName}</DisplayName>
    <Email>{email}</Email>
  </StyledContainer>
);

export default UserCard;
