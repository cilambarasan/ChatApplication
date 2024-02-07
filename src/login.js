import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import f1 from './1.jpg';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${f1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LoginFormContainer = styled('div')({
  padding: '40px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Title = styled('h2')({
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
});

const LockIcon = styled(LockOutlinedIcon)({
  fontSize: '60px',
  marginBottom: '20px',
  color: '#3f51b5',
});

const Input = styled(TextField)({
  marginBottom: '20px',
  width: '100%',
});

const SubmitButton = styled(Button)({
  width: '100%',
  marginBottom: '10px',
});

const SignupButton = styled(Button)({
  width: '100%',
  marginBottom: '10px',
  backgroundColor: '#4CAF50',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const ForgotPasswordLink = styled('a')({
  color: '#3f51b5',
  textDecoration: 'none',
  cursor: 'pointer',
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform validation logic here
    if (username && password) {
      // Navigate to the home page if validation passes
      navigate('/home');
    } else {
      // Show an alert if validation fails
      alert('Please enter both username and password.');
    }
  };

  const handleSignUp = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password page
    navigate('/forgot-password');
  };

  return (
    <Container>
      <LoginFormContainer>
        <LockIcon />
        <Title>Login</Title>
        <Input
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton variant="contained" color="primary" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
        <SignupButton variant="contained" onClick={handleSignUp}>
          Sign Up
        </SignupButton>
        <ForgotPasswordLink onClick={handleForgotPassword}>
          Forgot Password?
        </ForgotPasswordLink>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginPage;
