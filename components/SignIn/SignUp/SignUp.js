import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(20, "Too long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be 6 characters long")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}>
      {({ errors, touched, handleSubmit }) => (
        <Form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <Field
            className='block rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            name='name'
            placeholder='Name'
            // onChange={(e) => setLoginInfo({ ...LoginInfo, name: e.target.value })}
          />
          {errors.name && touched.name ? (
            <div className=' my-1 text-red-600'>* {errors.name}</div>
          ) : null}
          <Field
            className='block rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='email'
            name='email'
            placeholder='Email'
            // onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })}
          />
          {errors.email && touched.email ? (
            <div className='my-1 text-red-600'>* {errors.email}</div>
          ) : null}
          <Field
            className='block rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='password'
            name='password'
            placeholder='Password'
            // onChange={(e) => setLoginInfo({ ...LoginInfo, password: e.target.value })}
          />
          {errors.password && touched.password ? (
            <div className='my-1 text-red-600'>* {errors.password}</div>
          ) : null}
          <button
            type='submit'
            className='rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white'>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
