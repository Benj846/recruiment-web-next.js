import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import SignUp, { FieldComponent } from './SignUp/SignUp';
import { useMutation, gql } from '@apollo/client';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password must be 6 characters long')
    .matches(/(?=.*[0-9])/, 'Password must contain a number'),
});
const SignIn = () => {
  let isNotClicked = false;
  let Clicked = true;
  const [IsSignUp, setIsSignUp] = useState(isNotClicked);
  const LOGIN_MUTATION = gql`
    mutation LoginMutation($Email: String!, $Password: String!) {
      logIn(Email: $Email, Password: $Password, Name: $Name) {
        token
        user {
          Name
        }
      }
    }
  `;
  const [loginMutation, { error, loading, data }] = useMutation(LOGIN_MUTATION);
  return (
    <div className="w-max h-96 min-h-screen">
      <div className="flex justify-center ">
        <button className="m-8" onClick={() => setIsSignUp(isNotClicked)}>
          Sign up
        </button>
        <button
          className="w-[60px] h-[30px] m-8 border-b-2"
          onClick={() => setIsSignUp(Clicked)}
        >
          Sign in
        </button>
      </div>
      {IsSignUp ? (
        <div className="{`min-w-screen`}">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(data, { setSubmitting }) => {
              loginMutation({
                variables: {
                  Email: data.email,
                  Password: data.password,
                },
              }),
                console.log(`${data} ${setSubmitting} is console log`);
            }}
          >
            {({ errors, touched }) => (
              <div>
                <Form className="flex flex-col justify-center items-center">
                  <Field
                    className="block my-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="block my-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white"
                  >
                    Login
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
};

export default SignIn;
