/* eslint-disable no-unused-vars */
import React from 'react'
import Gif from '../Gif'
import PropTypes from 'prop-types';
import './styles.css'
// import { GifContextProvider } from '../../context/GifContext';

export default function ListOfGifs({ gifs }) {
   // const {gif, setGif} = useContext(GifContextProvider)

   
   return <div className='ListOfGifs'>
      {
         gifs.map(({ id, title, url }) =>
            <Gif
               key={id}
               id={id}
               title={title}
               url={url}
            />
         )
      }
   </div>
}

ListOfGifs.propTypes = {
   gifs: PropTypes.array.isRequired,
 };
