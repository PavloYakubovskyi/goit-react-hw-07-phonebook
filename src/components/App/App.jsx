import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, SubTitle, Title } from './App.styled';
import { Spinner } from 'components/Spinner/Spinner';
import { useGetContactsQuery } from 'redux/contactsApi';

export default function App() {
  const { data, isFetching } = useGetContactsQuery();
  const showContactList = data && !isFetching && data.length > 0;
  const showText = data && data.length === 0 && !isFetching;

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {showContactList ? <ContactList /> : <Spinner />}
      {showText && <p style={{ textAlign: 'center' }}>Dont have contacts...</p>}
    </Container>
  );
}
