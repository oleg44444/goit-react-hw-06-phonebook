import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contactsSlice';
import { contacts, filter } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filertItems = useSelector(filter);
  const contactsList = useSelector(contacts);

  const deleteContact = id => {
    dispatch(delContact(id));
  };

  const normalizedFilter = filertItems.toLowerCase();

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, number, name }) => (
        <li key={id} className={style.contactItem}>
          <p className={style.contactDetails}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
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
