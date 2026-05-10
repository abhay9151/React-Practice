import {useState,useMemo} from 'react'

const App = () => {
  const [count,setCount] = useState(0);
  const [total,setInput] = useState();
  function onincrement() {
    setCount(count+1);
  }
  function expensiveTask(total) {
    console.log("Inside Expensive Task");
    for(let i=0; i<1000000000; i++) {
    }
    return total*2;
  }
  const doublevalue = useMemo(() => {
    return expensiveTask(total);
  }, [total]);// jo last me change hoga uske basis pe hi expensive task chalega, agar total change hoga tabhi expensive task chalega, otherwise nahi chalega, agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive task baar baar call nahi hoga, jab bhi total change hoga tabhi expensive task call hoga, aur agar total change nahi hoga to useMemo apna purana value return kar dega, bina expensive task ko call kiye hue, isse hume performance me fayda milega, kyuki expensive

  return (
    <div className='container'>
      <button onClick={onincrement}>Increment</button>
      <p>Count: {count}</p> 
      <input type="text" value={total} onChange={(e) => setInput(e.target.value)} placeholder='Enter something'/>
      <p>Double Value: {doublevalue}</p>
      
    </div>
    
  )
}

export default App
