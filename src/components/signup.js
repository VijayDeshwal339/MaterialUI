// import React from "react";
// import { Avatar, Button, Paper, TextField, Typography} from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import { Navigate} from "react-router-dom";
// import { Formik,  ErrorMessage } from "formik";
// import * as Yup from "yup";



// const SignUp = (props) => {
//   let setIsLoggedIn = props.setIsLoggedIn;
//   const initialValues = {
//      email: "",
//      password: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//     password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
//  });

//  const handleSubmit = (values, { setSubmitting}) => {
//   <Navigate to= {"/"}/>
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//     setIsLoggedIn(true);
//   }, 200);
// };

//     const paperStyle ={padding:'30px 20px',width:300, marginTop:"300px"}
//     const headerStyle = {margin:0}
//     const avatarStyle = {backgroundColor:'#1bbd7e'}
//     const marginTop= {"margin":"5% 0"};
//     return (
//       <Grid >
//         <Paper elevation={20} style={paperStyle}>
//          <Grid align="center">
//             <Avatar style={avatarStyle}>
//             <AddCircleOutlineOutlinedIcon />
//             </Avatar>
//             <h2 style={headerStyle}>SignUp </h2> 
//             <Typography variant="caption">Please fill this form to create an account</Typography>
//          </Grid>
        
//          <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting })=>(
//              <form >
//           <TextField fullWidth label='Name' placeholder="Enter your name" />
//           <TextField fullWidth label='Email' placeholder="Enter your email" />
//           <ErrorMessage name="email" component="div" className="text-danger"/>
//           <FormControl style={marginTop}>
//       <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
//       <RadioGroup
//         row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         name="row-radio-buttons-group"
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
        
//       </RadioGroup>
//     </FormControl>
//           <TextField fullWidth label='Phone Number' placeholder="Enter your phonenumber" />
//           <TextField fullWidth label='Password' placeholder="Enter your password" />
//           <ErrorMessage name="password" component="div" />
//           <TextField fullWidth label='Confirm Password' placeholder="Enter your confirm password" />
//         <FormGroup>
      
//       <FormControlLabel required control={<Checkbox />} label="I accept the terms" />
    
//     </FormGroup>
//           <Button type="submit" variant="contained" color="primary">SignUp</Button>
//          </form>
//           )}
//         </Formik> 

//           </Paper>
//       </Grid>
//     );
// };

// export default SignUp;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    <Navigate to= {"/"}/>
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                type="text"
                error={!!(errors.firstName && touched.firstName)}
                helperText={errors.firstName && touched.firstName && errors.firstName}
              />
            </div>

            <div>
              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                type="text"
                error={!!(errors.lastName && touched.lastName)}
                helperText={errors.lastName && touched.lastName && errors.lastName}
              />
            </div>

            <div>
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                error={!!(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
              />
            </div>

            <div>
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                error={!!(errors.password && touched.password)}
                helperText={errors.password && touched.password && errors.password}
              />
            </div>

            <div>
              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                error={!!(errors.confirmPassword && touched.confirmPassword)}
                helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
