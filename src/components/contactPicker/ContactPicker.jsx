import React from "react";

export const ContactPicker = ({ contacts, value, name, handleChange }) => {
  return (
    <>
      <label for="contact">Choose a contact:</label>
      <select name={name} value={value} id="contact" onChange={handleChange} >
        <option value="">No Contact Selected</option>
        {contacts.map((contact, index) => (
          <option value={contact.name} key={index}>{contact.name}</option>
        ))};
      </select>
    </>
  );
};
