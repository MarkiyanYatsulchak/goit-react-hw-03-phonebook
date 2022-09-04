import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactLIst.module.scss';
// import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name} - {number}{' '}
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
            className={styles.button}
          >
            Delete
          </button>
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
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
