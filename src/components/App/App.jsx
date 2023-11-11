import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  return (
    <div>
      <div>Phonebook</div>
      <ContactForm />
      <div>Contacts</div>
      <Filter />
      <ContactList />
    </div>
  );
}
