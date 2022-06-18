import logo from "./logo.svg";
import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  // const randomButton = () => {
  //   let randomContact = Math.floor(Math.random() * contactsList.length)
  //   let randomButton = contactsList[randomContact]
  //   setContacts([randomButton, ...contacts])
  // }

  const randomButton = () => {
    let randomContact = Math.floor(Math.random() * contactsList.length);
    let contactsCopy = [...contacts];
    contactsCopy.push(contactsList[randomContact]);
    setContacts(contactsCopy);
  };

  function handleSortByPopularity() {
    let contactsCopy = [...contacts];
    let contactsByPopularity = contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(contactsByPopularity);
  }

  function handleSortByName() {
    let contactsCopy = [...contacts];
    let contactsByName = contactsCopy.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(contactsByName);
  }

  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContact);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="buttons">
        <div className="btn-group">
          <button
            className="btn btn-outline-dark"
            onClick={() => handleSortByPopularity()}>
            Sort by popularity
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => handleSortByName()}>
            Sort by name
          </button>
        </div>
        <button className="btn btn-outline-dark" onClick={randomButton}>
          Add random Contact
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="contact-image"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
              <td>{contact.wonEmmy ? <p>🏅</p> : <p></p>}</td>
              <button
                onClick={() => deleteContact(contact.id)}
                className="btn-delete">
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
