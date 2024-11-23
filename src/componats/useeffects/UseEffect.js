import React, { useState } from 'react'

const UseEffect = () => {

    const [count,usecount] =useState(0)

    const IncreaseCount = ()=>{
        usecount(count+1)
    }
    const DecreaseCount =()=>{
        if(count>0){
            usecount(count-1)
        }
        
    }

  return (
    <div>
      <h1>{count}</h1>  
      <button className='m-2' onClick={DecreaseCount}>-</button>
      <button onClick={IncreaseCount}>+</button>
      
    </div>
  )
}

export default UseEffect
