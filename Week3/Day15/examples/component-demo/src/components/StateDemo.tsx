import React, { useState } from 'react'

export default function StateDemo() {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
        setCount(count+1)
    }
  return (
      <div>
          <button type="button" onClick={handleClick}>
              You have clicked {count} times!
          </button>
          <button onClick={()=>setCount(0)}>
              Reset
          </button>
      </div>
  )
}
