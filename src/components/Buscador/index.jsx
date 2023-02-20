import React from 'react'
import './styles.css'
// import ListOfGifs from '../ListOfGifs';

export default function Buscador() {

  function onChangeHandler(e) {
    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, "", `/search/${e.target.value}`);
    }, 1500);
  }
  
  function preventDefault(e) {
    e.preventDefault()
  }
  
  return (
    <>
      <form onSubmit={preventDefault}>
          <input
              key="buscador"    
              type='search'
              placeholder='Busca el GIF que quieras'
              onChange={onChangeHandler}
          />
      </form>
      {/* <ListOfGifs keyword={keyword} /> */}
    </>
  )
}
