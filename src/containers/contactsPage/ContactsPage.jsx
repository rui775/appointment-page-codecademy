import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      alert(`Name: ${name} is already in the contact list.`);
      setName('');
      setPhone('');
      setEmail('');
      return;
    }
    if (contacts.some((contact) => contact.phone === phone)) {
      alert(`Phone Number: ${phone} is already in the contact list.`);
      setName('');
      setPhone('');
      setEmail('');
      return;
    }
    if (contacts.some((contact) => contact.email === email)) {
      alert(`Email: ${email} is already in the contact list.`);
      setName('');
      setPhone('');
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
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
