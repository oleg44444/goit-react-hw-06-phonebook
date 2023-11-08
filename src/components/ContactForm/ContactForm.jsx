import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { contacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const list = useSelector(contacts);
  const dispatch = useDispatch();

  const createContact = data => {
    const { name } = data;

    if (list.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor="name" className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label htmlFor="number" className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
