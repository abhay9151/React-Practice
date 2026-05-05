import React from 'react'

const App = () => {
  function handleClick(){
    alert('Button clicked');
  }
  function handlemouseover(){
    alert("Para ke upar aye ho");
  }
  function handleinputchange(){
    console.log("Input me value change huyi he");
  }
  function handleInputchange(e){
    console.log("Input me value change huyi he",e.target.value);
  }
  function handlesubmit(e){
    e.preventDefault();
    alert("Form submit ho gaya");
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleInputchange} />
      </form>
      <form onSubmit={handlesubmit}>
      <input type="text" onChange={handleinputchange} />
      <button type='submit'>Submit</button>
    </form>
      <p onMouseOver={handlemouseover} style={{border:"1px solid black"}}>Event handling in React</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
