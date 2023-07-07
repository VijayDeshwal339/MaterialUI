import React from 'react';
import { Button, Container, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';

const Login = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
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
           Login
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
              <FormControlLabel control={<CheckBox value="rememberMe"/>}label="Remember me" />
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
