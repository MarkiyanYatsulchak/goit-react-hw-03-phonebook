import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
