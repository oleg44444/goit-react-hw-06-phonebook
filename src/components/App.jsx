import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { addContact, delContact, updateFilter } from '../redux/contactsSlice';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsLocalMemory = localStorage.getItem('contacts');
  //   if (contactsLocalMemory) {
  //     setContacts(JSON.parse(contactsLocalMemory));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const createContact = data => {
    const { name } = data;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };
  const deleteContact = id => {
    dispatch(delContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={createContact} />
        <h2>Contacts</h2>
        <Filter value={filter} filterByName={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
export default App;
