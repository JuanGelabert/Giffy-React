import React from 'react'
import Gif from '../Gif'
import PropTypes from 'prop-types';
import './styles.css'

export default function ListOfGifs({ gifs }) {

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
