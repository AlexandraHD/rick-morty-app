/* eslint-disable react/prop-types */

import { useRef } from "react"

export const Character = ({ data, hasError }) => {

  const pRef = useRef();

  return (
    <>
    {
      data ?
      <div className="text-center">
          <img src={ data.image } alt={ data.name } />
          <h1 ref={ pRef } className="mb-2">Character: { data.name }</h1>
          <p>Species: { data.species }</p>
          <p>Gender: {data.gender}</p>
          <p>Origin: {data.origin.name}</p>
      </div>
      : <>
      <div className="text-center mb-4 mt-4">
        <h2>Id number not found</h2>
        { hasError } 
      </div>
      </>
    }
    </>
  )
}
