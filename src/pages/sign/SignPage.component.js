import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {SignContainer} from './SignPage.styles';

const SignPage = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  );
}




export default SignPage;