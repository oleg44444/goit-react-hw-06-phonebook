import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
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
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
export default App;
