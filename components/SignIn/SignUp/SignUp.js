import { useMutation, gql } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

const SignUp = () => {
  const SIGNUP_MUTATION = gql`
    mutation SignUpMutation(
      $Email: String!
      $Password: String!
      $Name: String!
    ) {
      signUp(Email: $Email, Password: $Password, Name: $Name) {
        token
        user {
          Name
        }
      }
    }
  `;
  const [signupMutation, { error, loading, data }] =
    useMutation(SIGNUP_MUTATION);

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
        }}
      >
        {({ errors, touched }) => (
          <div>
            {loading ? <div>is loading</div> : null}
            {error ? <div>error is {error.message}</div> : null}
            <Form className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <label className=" block text-gray-500 font-bold   pr-4">
                  {' '}
                  Name{' '}
                </label>
                <FieldComponent
                  name="name"
                  placeholder="John Cena"
                  autoFocusBool={true}
                />
                {errors.name && touched.name ? (
                  <div className="   my-1 text-red-600">* {errors.name}</div>
                ) : (
                  <div className="w-40"></div>
                )}
              </div>
              <div className="flex">
                <label className=" block text-gray-500 font-bold   pr-4">
                  {' '}
                  Email{' '}
                </label>
                <FieldComponent
                  type="email"
                  name="email"
                  placeholder="john@cena.com"
                />
                {errors.email && touched.email ? (
                  <div className=" left-50 my-1 text-red-600">
                    * {errors.email}
                  </div>
                ) : (
                  <div className="w-40"></div>
                )}
              </div>
              <div className="flex">
                <label className=" block text-gray-500 font-bold   pr-4">
                  {' '}
                  Password{' '}
                </label>
                <FieldComponent
                  type="password"
                  name="password"
                  placeholder="*******"
                />
                {errors.password && touched.password ? (
                  <div className=" my-1 text-red-600">* {errors.password}</div>
                ) : (
                  <div className="w-40"></div>
                )}
              </div>
              <button
                type="submit"
                className="rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white"
              >
                Sign up
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

export const FieldComponent = ({ type, name, placeholder, autoFocusBool }) => {
  return (
    <Field
      className="block my-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
      type={type}
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocusBool}
    />
  );
};
