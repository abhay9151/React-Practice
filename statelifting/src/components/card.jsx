import React from 'react'

const card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setName(e.target.value)}/>
      <p>Name state variable ki value inside Card: {props.name}</p>
    </div>
  )
}

export default card
