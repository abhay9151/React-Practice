import React from 'react'
import { useState,useRef} from 'react';

const App = () => {
  // const [count,setCount]=useState(0);
  // const val=useRef(0);
  // let btnRef=useRef();
  // function handleincrement(){
  //   val.current=val.current+1;
  //   console.log("value of val is",val.current);
  //   setCount(count+1);
  // }
  // function changeColor(){
  //   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  //   btnRef.current.style.backgroundColor = randomColor;
  // }
  // useEffect(() => {
  //   console.log("mai phir se render ho gaya");
  // }, [count]) 
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    // Prevent multiple intervals from starting at once
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
    // <div className='container'>
    //   <button onClick={handleincrement} ref={btnRef}>
    //     Increment</button>
    //     <br />
    //     <br />
    //   <button onClick={changeColor}>
    //       Change Color
    //     </button>
      
    //   <div>
    //     <p>Count: {count}</p>
    //   </div>
        
        

    // </div>
    <div className='container'>
      <h1>StopWatch: {time} seconds</h1>
      
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /><br />

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default App
// jab bhi apka page rerender hota hai, to uss samay useEffect ke andar ka code run hota hai. Agar apne useEffect ke dependency array me count diya hai, to jab bhi count update hoga, tabhi useEffect ke andar ka code run hoga. Isliye jab bhi ap button click karenge aur count update hoga, to useEffect ke andar ka code run hoga aur console me "mai phir se render ho gaya" print hoga.
// jab bhi apka rerender hhoga tab value persist nhi hogi same hoi rahegi, jab bhi ap button click karenge to val ki value 1 se start hogi aur increment hoti rahegi, lekin count ki value update hone ke baad rerender hoga aur val ki value wapas 1 ho jayegi. Isliye console me "value of val is 2" print hoga, lekin jab ap button click karenge to val ki value wapas 1 ho jayegi aur console me "value of val is 2" print hoga.