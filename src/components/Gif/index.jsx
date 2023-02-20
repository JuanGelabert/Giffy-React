import React from 'react'
import './styles.css'
import PropTypes from 'prop-types';


export default function Gif({title, url}) {
    return (
        <div className='img-container'>
            <img loading='lazy' src={url} alt={title} />
            <h4 className="titulo-img">{ title }</h4>    
        </div>
    )
}

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  };
  Gif.defaultProps = {
    title: 'Gif animado'
  };