import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { deleteContact } from 'redux/contascts/contactsOperations';
import { selectAllContact } from 'redux/contascts/contactsSelectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item }>
          {name}: {number}
          <Button
            variant="contained"
            onClick={() => dispatch(deleteContact(id))}
            type="button"
            size="small"
          >
            Delete
          </Button>
          {/* <button onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
