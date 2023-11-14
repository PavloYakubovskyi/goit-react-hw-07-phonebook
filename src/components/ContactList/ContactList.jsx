import { ContactListItems } from 'components/ContactListItems/ContactListItems';
import { ContactUl } from './ContactList.styled';

export const ContactList = () => {
  return (
    <ContactUl>
      <ContactListItems />
    </ContactUl>
  );
};
