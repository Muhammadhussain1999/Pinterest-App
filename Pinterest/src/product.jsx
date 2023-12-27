import React, { useState } from 'react'

export default function Product({age,data}) {
  const [a,b]=useState(true)
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
    <h1 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>Hello World</h1>
    <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}
