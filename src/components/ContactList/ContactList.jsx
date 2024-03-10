import { Contact } from "../Contact/Contact";

export const ContactList = ({ setContacts, contacts }) => {
  const handleContactDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          onDelete={() => handleContactDelete(contact.id)}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </>
  );
};
