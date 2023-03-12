import './App.css';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import ContactList from './Contactlist';
import Section from './Section';

const CONTACTS_CACHE_KEY = 'contactlist';

const initialState = JSON.parse(localStorage.getItem(CONTACTS_CACHE_KEY)) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(initialState);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    if (contacts.find(item => item.name === contact.name)) {
      return alert(`${contact.name} is already in contact`);
    }
    setContacts([...contacts, { ...contact, id: `id-${nanoid()}` }]);
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    console.log(contactId);
  };

  // useEffect(() => {
  //   const cacheContacts = localStorage.getItem(CONTACTS_CACHE_KEY);

  //   if (cacheContacts) {
  //     setContacts(JSON.parse(cacheContacts));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_CACHE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="app">
      <Section title="Phonebook" childrenClassName="phonebook">
        <ContactForm
          className="phonebook"
          onAddContact={contact => addContact(contact)}
        />
      </Section>
      <Section title="Contacts" childrenClassName="contacts">
        <Filter onFilterUpdate={filterString => setFilter(filterString)} />
        <ContactList
          contacts={contacts}
          onDeleteContact={contact => deleteContact(contact)}
          filter={filter}
        ></ContactList>
      </Section>
    </div>
  );
}
