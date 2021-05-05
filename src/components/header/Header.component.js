import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.select';

import { HeaderContainer, HeaderNav, HeaderNavItem } from './Header.styles';
import { auth } from '../../firebase';
import { useAuth0 } from '@auth0/auth0-react';

const Header = ({ currentUser }) => {
  const { user, isAuthenticated, logout, getTokenWithPopup, getAccessTokenSilently, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    return () => {
      logout();
    };
  }, []);

  if (isAuthenticated) {
    async function kek () {
      const claims = await getIdTokenClaims();
      const token = await getAccessTokenSilently();
    }
    kek()
  }

  if(currentUser) {
    console.log(auth.currentUser)
  }

  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderNavItem to='/'>Home</HeaderNavItem>
        <HeaderNavItem to='/comments'>Comments</HeaderNavItem>
        <HeaderNavItem to='/about'>About</HeaderNavItem>
        <HeaderNavItem to='/users'>Users</HeaderNavItem>
        {isAuthenticated ? (
          <button onClick={() => logout()}>Log Out</button>
        ) : currentUser ? (
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
