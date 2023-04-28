import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { contactsFilter } from 'redux/filter/filterSlice';
import { selectfilterContact } from 'redux/contascts/contactsSelectors';
// import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectfilterContact);
  return (
    <TextField
      id="outlined-basic"
      label="Find contacts by name"
      type="text"
      name="filter"
      value={filter}
      onChange={e => dispatch(contactsFilter(e.target.value.toLowerCase()))}
      size="small"
    />
    // <label >
    //   <p >Find contacts by name</p>
    //   <input
    //     type="text"
    //     name="filter"
    //     value={filter}
    //     onChange={e => dispatch(contactsFilter(e.target.value.toLowerCase()))}
    //   />
    // </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
