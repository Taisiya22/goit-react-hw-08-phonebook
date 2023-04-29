import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@mui/material';

import avatar from 'utils/avatar.png';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <img width={40} src={avatar} alt="" />
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="contained"
        size="small"
      >
        Logout
      </Button>
    </div>
  );
};
