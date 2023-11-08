import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
