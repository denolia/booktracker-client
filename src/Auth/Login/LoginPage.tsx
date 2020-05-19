import React from 'react';
import { Route } from 'react-router-dom';
import { SignInContainer } from './containers/SignInContainer';
import { SignUpContainer } from './containers/SignUpContainer';

export function LoginPage() {
  return (
    <>
      <Route path="/login" component={SignInContainer} />
      <Route path="/register" component={SignUpContainer} />
    </>
  );
}
