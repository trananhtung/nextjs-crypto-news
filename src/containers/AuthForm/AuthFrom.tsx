import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import Router from 'next/router';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { createUser } from '../../helper';
import { FormWrapper, Form } from './Style';
import { RedirectableProviderType } from 'next-auth/providers';

export function AuthForm() {
  const userNameInputRef = useRef<HTMLInputElement>(null!);
  const passwordInputRef = useRef<HTMLInputElement>(null!);

  const [isRegister, setIsRegister] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleHidePassword = () => {
    setIsHidePassword((prevState) => !prevState);
  };

  function handleSwitchMode() {
    setIsRegister((prevState) => !prevState);
  }

  function goHomePage() {
    Router.push('/');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredUsername = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // Login
    if (!isRegister && enteredUsername && enteredPassword) {
      const response = await signIn<'credentials'>('credentials', {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });
      if (response?.ok) {
        setErrorMessage('');
        goHomePage();
      } else {
        setErrorMessage(response?.error ?? 'Unknown error');
      }
      return;
    }
    // Register new user
    if (isRegister && enteredUsername && enteredPassword) {
      try {
        const response = await createUser(enteredUsername, enteredPassword);
        if (response.status === 201) {
          setIsRegisterSuccess(true);
        } else {
          const data = await response.json();
          setErrorMessage(data.message ?? 'Unknown error');
        }
      } catch (error) {
        console.log(error);
      }
      return;
    }
  }

  if (isRegisterSuccess) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" color="success.main" sx={{ mb: '1rem' }}>
          Register successfully!
        </Typography>
        <Button variant="outlined" onClick={goHomePage}>
          Home Page
        </Button>
      </Box>
    );
  }

  return (
    <FormWrapper>
      <Typography
        variant="h4"
        color="info.dark"
        sx={{
          mb: '1rem',
          border: '1px solid #01579b',
          borderRadius: '2rem',
          width: '100%',
          p: 1,
          textAlign: 'center',
        }}
      >
        {isRegister ? 'Create New Account' : 'Sign In'}
      </Typography>
      <Form onSubmit={handleSubmit}>
        <FormControl variant="standard" color="success">
          <InputLabel htmlFor="user-name">User Name</InputLabel>
          <Input
            id="user-name"
            inputRef={userNameInputRef}
            required
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" color="success">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            inputRef={passwordInputRef}
            required
            type={isHidePassword ? 'password' : 'text'}
            startAdornment={
              <InputAdornment
                position="start"
                onClick={handleHidePassword}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                {isHidePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            }
          />
        </FormControl>
        <FormHelperText error={true}>{errorMessage}</FormHelperText>
        <Button variant="contained" type="submit">
          {isRegister ? 'REGISTER' : 'SUBMIT'}
        </Button>
      </Form>
      <Button onClick={handleSwitchMode} color="secondary">
        <Typography variant="caption" sx={{ textTransform: 'none', textDecoration: 'underline' }}>
          {isRegister ? 'Sign In' : 'Create new account'}
        </Typography>
      </Button>
    </FormWrapper>
  );
}
