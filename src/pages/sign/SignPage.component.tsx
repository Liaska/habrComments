import React, { FC } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Auth0 from "../../components/auth0/Auth0.component"

import {SignContainer} from './SignPage.styles';

const SignPage = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
      <Auth0 />
    </SignContainer>
  );
}



export default SignPage;