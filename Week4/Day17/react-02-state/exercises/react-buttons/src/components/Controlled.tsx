import React from 'react'
import { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState<string>("Guest")
    const handleInput = (e:any) => {
        setName(e.target.value)
    }
  return (
      <div>
          <input type="text" value={name} onInput={(event) => handleInput(event)}></input>
          <p style={{color:name}}>Name is {name}</p>
    </div>
  )
}
