import gql from 'graphql-tag';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Login.scss';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <section className='wrapper'>
          <div className='content'>
            <header>
              <h1>Exchange Rates to SEK</h1>
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
                    onChange={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                  />
                  <div className='errorText'>
                    {props.touched.email && props.errors.email}
                  </div>
                </div>
                <div>&nbsp;</div>
                <div className='input-group'>
                  <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    name='password'
                    onChange={props.handleChange('password')}
                    value={props.values.password}
                    onBlur={props.handleBlur('password')}
                  />
                  <div className='errorText'>
                    {props.touched.password && props.errors.password}
                  </div>
                </div>
                <div className='input-group'>
                  <button type='submit' onClick={props.handleSubmit}>
                    Login
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default Login;
