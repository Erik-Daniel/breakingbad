import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Info() {
    const location = useLocation();
    const character = location.state;
    return (
      <>
        {console.log(character)}
      </>
  )
}
