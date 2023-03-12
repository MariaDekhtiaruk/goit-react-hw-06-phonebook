import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import React from 'react';
import { useSelector } from 'react-redux';

const isSubstringPresentInString = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const contactsFilter = useSelector(state => state.filter);

  console.log(contacts);

  return (
    <ul className="list">
      {contacts
        .filter(item => isSubstringPresentInString(item.name, contactsFilter))
        .map(contactItem => (
          <ContactItem contact={contactItem} key={contactItem.id}></ContactItem>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
