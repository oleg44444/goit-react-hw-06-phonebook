import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, delContact, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
export const contacts = state => state.contacts.contacts;
export const filter = state => state.contacts.filter;
