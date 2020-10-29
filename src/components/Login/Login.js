import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import '../../Styles.scss';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const confirm = (data) => {
    const resData = JSON.stringify(data.LoginUser.token);
    const tokenStr = resData.replace(/^"|"$/g, '');
    localStorage.setItem('token', tokenStr);
    props.history.push('/countries');
  };

  return (
    <section className='wrapper'>
      <div className='content'>
        <header>
          <h1>SEK Exchange Rates Converter</h1>
          <div>
            <h2>Login to continue</h2>
          </div>
        </header>
        <section>
          <form className='login-form'>
            <div className='input-group'>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>&nbsp;</div>
            <div className='input-group'>
              <input
                type='password'
                placeholder='Password'
                id='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className='input-group'>
              <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                onCompleted={(data) => confirm(data)}
              >
                {(postMutation) => (
                  <button type='button' onClick={postMutation}>
                    Login
                  </button>
                )}
              </Mutation>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Login;
