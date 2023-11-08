import React from 'react';
import styles from './Filte.module.css';
const Filter = ({ value, filterByName }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={filterByName}
      />
    </label>
  );
};
export default Filter;
