import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contact list.`);
      setName('');
      return;
    }
    if (contacts.some((contact) => contact.phone === phone)) {
      alert(`${phone} is already in the contact list.`);
      setPhone('');
      return;
    }
    if (contacts.some((contact) => contact.email === email)) {
      alert(`${email} is already in the contact list.`);
      setEmail('');
      return;
    } else {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileCards={contacts} />
      </section>
    </div>
  );
};