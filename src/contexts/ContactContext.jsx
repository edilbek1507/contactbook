import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";

const contactContext = createContext();

export const useContactContext = () => useContext(contactContext);

const ContactContext = ({ children }) => {
  // ! Чтобы стянуть с API
  const [contacts, setContacts] = useState();

  async function getContacts() {
    const { data } = await axios.get(API);
    setContacts(data);
  }
  // ! Чтобы стянуть с API

  const value = {
    contacts,
    getContacts,
  };

  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
