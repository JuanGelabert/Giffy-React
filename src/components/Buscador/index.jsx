import React, { useState } from 'react'
import './styles.css'
import { useLocation } from 'wouter'

export default function Buscador() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input
            key="buscador"    
            type='search'
            placeholder='Busca el GIF que quieras'
            onChange={handleChange}
            value={keyword}
          />
      </form>
    </>
  )
}
