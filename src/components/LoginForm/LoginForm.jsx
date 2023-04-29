import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="text"
        name="email"
        size="small"
        required
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        size="small"
        required
      />
      <Button variant="contained" type="submit" size="small">
        Log in
      </Button>
    </form>
  );
};
