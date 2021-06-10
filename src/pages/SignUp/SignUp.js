import React from 'react';
import { SignUpSection } from '../../components';
import { signUpObjOne } from './Data.js';

const SignUp = () => {
  return (
    <>
      <SignUpSection {...signUpObjOne}/>
    </>
  );
}

export default SignUp;
