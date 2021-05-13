import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.select';

import { HeaderContainer, HeaderNav, HeaderNavItem } from './Header.styles';
import { auth } from '../../firebase';
import { useAuth0 } from '@auth0/auth0-react';
import { RootState } from '../../redux/store';
import { TUser } from '../../redux/InterfacesAndTypes';

interface IHeader {
  currentUser: TUser | null;
}

const Header: FC<IHeader> = ({ currentUser }) => {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  useEffect(() => {
    return () => {
      logout();
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderNavItem to='/'>Home</HeaderNavItem>
        <HeaderNavItem to='/comments'>Comments</HeaderNavItem>
        <HeaderNavItem to='/technologies'>Technologies</HeaderNavItem>
        <HeaderNavItem to='/users'>Users</HeaderNavItem>
        <HeaderNavItem to='/coinbase'>Coinbase</HeaderNavItem>
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

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Header);
