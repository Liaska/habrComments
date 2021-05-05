import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.select';

import { HeaderContainer, HeaderNav, HeaderNavItem } from './Header.styles';
import { auth } from '../../firebase';

const Header = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderNavItem to='/'>Home</HeaderNavItem>
        <HeaderNavItem to='/comments'>Comments</HeaderNavItem>
        <HeaderNavItem to='/about'>About</HeaderNavItem>
        <HeaderNavItem to='/users'>Users</HeaderNavItem>
        {currentUser ? (
          <HeaderNavItem as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </HeaderNavItem>
        ) : (
          <HeaderNavItem to='/sign'>SIGN IN</HeaderNavItem>
        )}
      </HeaderNav>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state, state.user),
});

export default connect(mapStateToProps)(Header);
