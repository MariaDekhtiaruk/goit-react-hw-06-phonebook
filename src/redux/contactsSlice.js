import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: initialStateContacts,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { newContact } = action.payload;

      if (state.contacts.find(item => item.name === newContact.name)) {
        return alert(`${newContact.name} is already in contact`);
      }

      newContact.id = `id-${nanoid()}`;
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      const { contactId } = action.payload;

      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
