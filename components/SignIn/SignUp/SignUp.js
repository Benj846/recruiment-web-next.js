import { useMutation, gql } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(20, 'Too long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Password must be 6 characters long')
      .matches(/(?=.*[0-9])/, 'Password must contain a number'),
  });

  const SIGNUP_MUTATION = gql`
    mutation SignUpMutation(
      $Email: String!
      $Password: String!
      $Name: String!
    ) {
      signUp(Email: $Email, Password: $Password, Name: $Name) {
        token
      }
    }
  `;
  const [signupMutation, { error, loading, data }] =
    useMutation(SIGNUP_MUTATION);

  loading ? <div> loading ...</div> : null;
  error ? <div>{error.message}</div> : null;
  return (
    <div className={`min-w-screen`}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data);
          setSubmitting(false);
          signupMutation({
            variables: {
              Email: data.email,
              Password: data.password,
              Name: data.name,
            },
          });
          console.log(error);
        }}
        className={`w-80`}>
        {({ values, errors, touched, handleSubmit }) => (
          <Form className="flex flex-col justify-center items-center">
            <div className="flex">
              {/* testing */}
              {/* {values.name} */}

              <FieldComponent name="name" placeholder="Name" />
              {errors.name && touched.name ? (
                <div className=" static  my-1 text-red-600">
                  * {errors.name}
                </div>
              ) : null}
            </div>
            <div className="flex">
              <FieldComponent type="email" name="email" placeholder="Email" />
              {errors.email && touched.email ? (
                <div className="absolute left-50 my-1 text-red-600">
                  * {errors.email}
                </div>
              ) : null}
            </div>
            <div className="flex">
              <FieldComponent
                type="password"
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className=" my-1 text-red-600">* {errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

import React from 'react';

function FieldComponent({ type, name, placeholder }) {
  return (
    <Field
      className="block my-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
      type={type}
      name={name}
      placeholder={placeholder}
      // onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })}
    />
  );
}
