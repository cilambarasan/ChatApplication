import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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

const SignupFormContainer = styled('div')({
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

const PersonAdd = styled(PersonAddIcon)({
  fontSize: '60px',
  marginBottom: '20px',
  color: '#3f51b5',
});

const Input = styled(TextField)({
  marginBottom: '20px',
  width: '100%',
});

const SignupButton = styled(Button)({
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

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Check if all required fields are filled
    if (email && username && password && confirmPassword) {
      // Check if passwords match
      if (password === confirmPassword) {
        // Perform user registration logic here
        // You can implement API calls or any other registration logic

        // After successful registration, navigate to the home page or login page
        navigate('/login');
      } else {
        // Passwords don't match, show an alert or handle the error accordingly
        alert('Passwords do not match.');
      }
    } else {
      // Show an alert or handle the error for missing fields
      alert('Please fill in all required fields.');
    }
  };

  const handleLoginLink = () => {
    // Navigate back to the login page
    navigate('/');
  };

  return (
    <Container>
      <SignupFormContainer>
        <PersonAdd />
        <Title>Sign Up</Title>
        <Input
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <Input
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignupButton variant="contained" onClick={handleSignUp}>
          Sign Up
        </SignupButton>
        <LoginPageLink onClick={handleLoginLink}>Already have an account? Login</LoginPageLink>
      </SignupFormContainer>
    </Container>
  );
};

export default SignupPage;
