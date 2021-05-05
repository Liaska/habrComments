import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useHistory } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase';
import { SignUpWrapper, Title } from './sign-up.styles';
const SignUp = () => {
  const history = useHistory();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      history.replace('/comments');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpWrapper>
      <Title>I do not have a account</Title>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={submitForm}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label='E-mail'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
