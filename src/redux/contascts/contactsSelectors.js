import { createSelector } from "@reduxjs/toolkit";

export const selectContact = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectErorr = state => state.contacts.error;
export const selectfilterContact = state => state.filter;
export const selectAllContact = createSelector([selectContact, selectfilterContact], (contacts, filter) =>  
    contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
)