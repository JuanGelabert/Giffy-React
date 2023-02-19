import React from 'react'
// import ListOfGifs from '../ListOfGifs';

export default function Buscador() {

  function onChangeHandler(e) {
    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, "", `/search/${e.target.value}`);
    }, 1500);
  }
  
  return (
    <>
      <form>
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
