import { useState } from 'react';
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'
const App = () => {
  const[isLoggedIn,setLoggedIn]=useState(true);
  if(isLoggedIn){
    return (
      <div>
        <h1>Welcome to the website</h1>
        <Logoutbtn setLoggedIn={setLoggedIn}/>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>Please login to continue</h1>
        <Loginbtn setLoggedIn={setLoggedIn}/>
      </div>
    )
  }
}

export default App
