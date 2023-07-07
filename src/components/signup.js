import React from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    <Navigate to={"/"} />
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setIsLoggedIn(true);
      // navigate('/');
    }, 200);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  as={TextField}
                  label="First Name"
                  name="firstName"
                  type="text"
                  fullWidth
                  margin="normal"
                  // error={isSubmitting}
                />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>

              <div>
                <Field
                  as={TextField}
                  label="Last Name"
                  name="lastName"
                  type="text"
                  fullWidth
                  margin="normal"
                  // error={isSubmitting}
                />
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>

              <div>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  // error={isSubmitting}
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div>
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  // error={isSubmitting}
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div>
                <Field
                  as={TextField}
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  margin="normal"
                  // error={isSubmitting}
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>

              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default SignUp;
