import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase';

import { Buttons, SignInWrapper, Title } from './sign-in.styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      history.replace('/comments');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInWrapper>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitForm}>
        <FormInput
          name='email'
          type='email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          label='E-mail'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label='Password'
          required
        />
        <Buttons>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;
