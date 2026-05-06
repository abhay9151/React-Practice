import { createContext } from "react"
import ChildA from "./components/ChildA"
import './App.css'
import { useState } from "react"
// step 1 :create context
// const UserContext = createContext()
//step 2: wrap all the child inside the provider
// step3: pass the value in provider
// ste4: consumer ke andar jake usko consume karlo
const themeContext = createContext();
const App = () => {
  // const [user,setUser]=useState({name:"Abhay Pratap Singh",email:"abhaypratapsingh@example.com" });
  const [theme,setTheme]=useState("light");
  return (
    <div>
      
      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}
      <themeContext.Provider value={{theme,setTheme}}>  
      <div id="container" style={{background: theme==="light" ? "beige" : "black"}}>
        <ChildA/>
      </div>
        
      </themeContext.Provider>
     
      
    </div>
  )
}

export default App
// export {UserContext}
export {themeContext}
