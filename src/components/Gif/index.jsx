import React from 'react'
import './styles.css'
import PropTypes from 'prop-types';


export default function Gif({title, url}) {
    return (
        <div className='img-container'>
            <img src={url} alt={title} />
            <div className="titulo-img">{ title }</div>    
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