import './App.css';
import {useState} from "react"
import allContacts from "./contacts.json"

function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0,5))

  const addRandom = () => {
    let randomNum = Math.floor(Math.random()*allContacts.length)
    let randomContact = allContacts[randomNum]
    return setContacts([...contacts].concat(randomContact))
  }
  const sortName = () => {
    const clonedContact = structuredClone(contacts)
    const sortedContact = clonedContact.sort((a,b) => a.name > b.name ? 1 : -1)
    return setContacts(sortedContact)
  }
  const sortPop = () => {
    const clonedContact = structuredClone(contacts)
    const sortedContact = clonedContact.sort((a,b) => a.popularity > b.popularity ? -1 : 1)
    return setContacts(sortedContact)
  }
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(eachContact => eachContact.id !== contactId))
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandom}>Add Random</button>
    <button onClick={sortName}>Sort by Name</button>
    <button onClick={sortPop}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map(eachContact => {
          return(
              <tr key={eachContact.id}>
                <td><img src={eachContact.pictureUrl} alt="" width={"200px"}/></td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td>{eachContact.wonOscar === true && <p>🏆</p>}</td>
                <td>{eachContact.wonEmmy === true && <p>🏆</p>}</td>
                <button onClick={() => deleteContact(eachContact.id)}>Delete Contact</button>
              </tr>
          
          )
        })}
      </table>
    </div>
  );
}

export default App;
