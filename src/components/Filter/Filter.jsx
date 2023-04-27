import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { contactsFilter } from 'redux/filter/filterSlice';
import { selectfilterContact } from 'redux/contascts/contactsSelectors';
// import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectfilterContact);
  return (
    <label >
      <p >Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(contactsFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
