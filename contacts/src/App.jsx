import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import contacts from './contacts'

function createCard(contact){
  return <Card 
  key ={contact.id}
  name={contact.name}
  img ={contact.imgUrl}
  house={contact.house} 
  wand={contact.wand}
  />

}

function App() {
  

  return (
    <>
    <h1 className="heading">Hogwarts Students </h1>
    {contacts.map(createCard)}
    </>
  );
}

export default App
