import { Copyright } from '@app/Common/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { FormEvent } from 'react';
import { useAuth } from '../AuthContext';
import { LoginMode } from './types';

interface Props {
  mode: LoginMode;
}

export function LoginForm({ mode }: Props) {
  const { login, signup } = useAuth();
  const theme = useTheme();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get('email') as string | undefined;
    const password = data.get('password') as string | undefined;

    const loginMethod = mode === LoginMode.SIGN_IN ? login : signup;
    if (email && password) {
      loginMethod(email, password);
    }
  }

  return (
    <div className="container-sm justify-content-center col-lg-4 col-md-8 col-sm-12">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LockOutlinedIcon style={{ color: theme.palette.primary.light }} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {mode}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={mode === LoginMode.SIGN_IN ? '/register' : '/login'}
                  variant="body2"
                >
                  {mode === LoginMode.SIGN_IN
                    ? "Don't have an account? Sign Up"
                    : 'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </div>
  );
}
