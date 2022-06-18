import logo from './logo.svg';
import './App.css';
import contactsList from './contacts.json'
import {useState} from 'react'

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5))
  
  const randomButton = () => {
    let randomContact = Math.floor(Math.random() * contacts.length)
    let randomButton = contacts[randomContact]
    setContacts([randomButton, ...contacts])
  }



  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={randomButton}>Add random Contact</button>
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
          {contacts.map(contact =>
          (
            <tr key={contact.id}>
              <td><img className="contact-image" src={contact.pictureUrl} alt={contact.name}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
              <td>{contact.wonEmmy ? <p>🏅</p> : <p></p>}</td>
            </tr>
          ))}
          </tbody>
        </table>



    </div>
  );
}

export default App;
