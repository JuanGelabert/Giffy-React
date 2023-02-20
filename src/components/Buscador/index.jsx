import React from 'react'
import './styles.css'
// import ListOfGifs from '../ListOfGifs';

export default function Buscador() {

  const handleChange = e => {
    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, "", `/search/${e.target.value}`);
    }, 1500);
  }
  
  const handleSubmit = e => {
    e.preventDefault()
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input
              key="buscador"    
              type='search'
              placeholder='Busca el GIF que quieras'
              onChange={handleChange}
          />
      </form>
      {/* <ListOfGifs keyword={keyword} /> */}
    </>
  )
}
