import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import f1 from './1.jpg';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${f1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const ForgotPasswordContainer = styled('div')({
  padding: '40px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Title = styled('h2')({
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
});

const VpnKey = styled(VpnKeyIcon)({
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
  backgroundColor: '#4CAF50',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const LoginPageLink = styled('a')({
  color: '#3f51b5',
  textDecoration: 'none',
  cursor: 'pointer',
});

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Perform logic for resetting password (send reset email, etc.)
    // You can implement API calls or any other password recovery logic

    // After initiating the password reset, you can navigate to a confirmation page
    // or stay on the same page and show a confirmation message to the user
    alert('Password reset initiated. Please check your email for further instructions.');
  };

  const handleLoginLink = () => {
    // Navigate back to the login page
    navigate('/');
  };

  return (
    <Container>
      <ForgotPasswordContainer>
        <VpnKey />
        <Title>Forgot Password</Title>
        <Input
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton variant="contained" onClick={handleResetPassword}>
          Reset Password
        </SubmitButton>
        <LoginPageLink onClick={handleLoginLink}>Remembered your password? Login</LoginPageLink>
      </ForgotPasswordContainer>
    </Container>
  );
};

export default ForgotPasswordPage;
