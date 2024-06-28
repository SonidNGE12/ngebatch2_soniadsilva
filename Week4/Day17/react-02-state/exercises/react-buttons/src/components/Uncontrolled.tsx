import React, { useRef } from 'react'

export default function Uncontrolled() {
    const e = useRef<HTMLInputElement|null>(null)
    const handleClick = () => {
        console.log(e.current?.value);
    }
  return (
    <div>
      <input type="text" ref={e} onInput={handleClick}></input>
      <p>{e?.current?.value}</p>
    </div>
  );
}
