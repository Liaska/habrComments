import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.select';

import { HeaderContainer, HeaderNav, HeaderNavItem } from './Header.styles';
import { auth } from '../../firebase';
import { useAuth0 } from '@auth0/auth0-react';
import { AppDispatch, RootState } from '../../redux/store';
import { IUser } from '../../redux/InterfacesAndTypes';
import { setCurrentUser } from '../../redux/user/userSlice';

const Header: FC<IUser> = ({ currentUser, setCurrentUser }) => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderNavItem to='/'>Home</HeaderNavItem>
        <HeaderNavItem to='/comments'>Comments</HeaderNavItem>
        <HeaderNavItem to='/technologies'>Technologies</HeaderNavItem>
        <HeaderNavItem to='/users'>Users</HeaderNavItem>
        <HeaderNavItem to='/coinbase'>Coinbase</HeaderNavItem>
        {currentUser ? (
          <HeaderNavItem
            as='div'
            onClick={() => {
              auth.signOut();
              setCurrentUser(null);
            }}>
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
