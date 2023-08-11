import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList) 
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ",setPuppies);

  
  
  return (
    <div>
      <h1>Puppy Pals</h1>
      {
        puppies.map((puppy) =>{
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
  )
}

export default App
