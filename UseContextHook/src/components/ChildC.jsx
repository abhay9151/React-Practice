import React, { useContext } from 'react'
// import {UserContext} from '../App'
import{themeContext} from '../App'

const ChildC = () => {
//   const user = useContext(UserContext);
    const {theme,setTheme} = useContext(themeContext);
    function handletheme(){
        if(theme==="light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
  return (
    <div>
        <button onClick={handletheme}>Change Theme</button>
    </div>
  )
}

export default ChildC
