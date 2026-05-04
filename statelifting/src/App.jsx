import React from 'react'
import Card from './components/card'// isko hamesha capital me rakhana he hamesha
import { useState } from 'react'
const App = () => {
  // create state
  //manage state
  //change state
  //sabhi chiil me state ko sync karwa dunga
  const[name,setName]=useState('');
  return (
    <div>
      Hello jee
      <Card name={name} setName={setName}/>
      <p>I am inside parent component and value of is {name}:</p>
      {/* // isme jo bhi hame name state variable me value milegi wo yaha par show hogi. */}
    </div>
  )
}

export default App

//parent component ne yaha se value bheji he aor child component  value leta he 