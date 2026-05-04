import React, { useState } from 'react';
// import card from './components/card'
import Button from './components/button';


const App = () => {
    const[count,setcount]=useState(0);
    function handleclick(){
        setcount(count+1);
    }
  return (

    <div>
      <Button incrementCount={handleclick} text="Click me">
        <h1>{count}</h1>
      </Button>
      {/* <card>
          <h1>My Name is Abhay</h1>
          <p>My age is 22</p>
          <p>My profession is Software Engineer</p>
      </card> */}
    </div>
  )
}

export default App
