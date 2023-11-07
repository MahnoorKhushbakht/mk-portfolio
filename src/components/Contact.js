import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import customTheme from './theme';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { Typography } from '@mui/material';


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const outerTheme = useTheme();

  const handleSubmit = (formData, resetFormFields) => {
    axios
      .post('http://localhost:3000/contactme', formData)
      .then((res) => {
        setIsSuccess(true);
        resetFormFields();
      })
      .catch((error) => {
        setIsError(true);
      });
  };
  const cardStyle = {
    backgroundColor: '#4F4A45',
    borderRadius: '16px',
    maxWidth: '80%',
    width: '80%',
  };

  const textStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    color: '#F6F1EE',
  };

  return (
    <div id='contact' height='100vh'>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" marginTop='100px'  marginBottom='20px'>
        <Card
          variant="outlined"
          sx={cardStyle}
        >
          <CardContent>
            <Typography color={'#F6F1EE'} variant="h4" marginBottom={'10px'} fontFamily= "'Courier New', Courier, monospace">
              Contact Me
            </Typography>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <div>
                      <Field
                        name="firstName"
                        type="text"
                        as={TextField}
                        label="First Name"
                        variant="standard"
                        margin="dense"
                        fullWidth
                        error={touched.firstName && errors.firstName}
                        sx={{ ...textStyle, color: '#F6F1EE' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="firstName">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#F6F1EE',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex',
                              alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="lastName"
                        type="text"
                        as={TextField}
                        label="Last Name"
                        variant="standard"
                        margin="dense"
                        fullWidth
                        error={touched.lastName && errors.lastName}
                        sx={{ ...textStyle, color: '#F6F1EE' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="lastName">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#F6F1EE',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="text"
                        as={TextField}
                        label="Email"
                        variant="standard"
                        margin="dense"
                        fullWidth
                        error={touched.email && errors.email}
                        sx={{ ...textStyle, color: '#F6F1EE' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="email">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#F6F1EE',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="message"
                        type="text"
                        as={TextField}
                        label="Message"
                        multiline
                        rows={4}
                        variant="standard"
                        margin="dense"
                        fullWidth
                        sx={{ ...textStyle, color: '#F6F1EE' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="message">
                        {msg => (
                          <div className="error"
                            style={{
                              color: '#F6F1EE',
                              position: 'relative',
                              margin: '2px 0',
                              left: '5px',
                              display: 'flex', alignItems: 'left'
                            }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </ThemeProvider>
                  <Button
                    type="submit"
                    sx={{
                      background: '#ED7D31',
                      color: '#F6F1EE',
                      '&:hover': {
                        background: '#F6F1EE',
                        color: '#4F4A45',
                      },
                      marginTop: '16px',
                      fontFamily: "'Courier New', Courier, monospace",
                    }}
                    variant="contained"
                    disabled={!isValid}
                  >
                    Submit
                  </Button>
                  <Snackbar
                    open={isSuccess}
                    autoHideDuration={6000}
                    onClose={() => setIsSuccess(false)}
                  >
                    <Alert severity="success" onClose={() => setIsSuccess(false)}>
                      Form submitted successfully!
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={isError}
                    autoHideDuration={6000}
                    onClose={() => setIsError(false)}
                  >
                    <Alert severity="error" onClose={() => setIsError(false)}>
                      Error submitting the form.
                    </Alert>
                  </Snackbar>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Contact;
