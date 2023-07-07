import React from 'react';
import { Avatar, Button, Paper, Stack, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Navigate} from "react-router-dom";
import { Formik,  ErrorMessage } from "formik";
import * as Yup from "yup";


const Login = (props) => {
     let setIsLoggedIn = props.setIsLoggedIn;
     const initialValues = {
        email: "",
        password: "",
     };

     const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
     });

     const handleSubmit = (values, { setSubmitting}) => {
        <Navigate to= {"/"}/>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setIsLoggedIn(true);
        }, 200);
     };

    const paperStyle ={padding:'30px 20px',width:300, margin:"20px auto"}
    const headerStyle = {margin:0}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    
    return (
       
      <Grid>
       
        <Paper elevation={20} style={paperStyle} >
         <Grid align="center">
            <Avatar style={avatarStyle}>
            <LoginOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Login </h2> 
            {/* <Typography variant="caption">Please fill this form to create an account</Typography> */}
         </Grid>
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
         {({ isSubmitting })=>(
         <form >
         <Stack spacing={4}>
          <TextField fullWidth label='Email'name='email' placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="text-danger"/>
          </Stack>

          <Stack spacing={2}>
          <TextField fullWidth label='Password'name='password' placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" />
          </Stack>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>Login</Button>
         </form>
          )}
         </Formik>
          </Paper>
      </Grid>
      
    );
};

export default Login;
