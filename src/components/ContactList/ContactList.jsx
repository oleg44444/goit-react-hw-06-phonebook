import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, number, name }) => (
        <li key={id} className={style.contactItem}>
          <p className={style.contactDetails}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={style.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
