import React, { useContext } from 'react'
import './styles.css'
import PropTypes from 'prop-types';
import { Link } from 'wouter';
import GifContext from '../../context/GifContext';


export default function Gif({ title, id, url }) {
    // eslint-disable-next-line no-unused-vars
    const {gif, setGif} = useContext(GifContext)
    
    function handleClick(e) {
        const scopeGif ={
            'id': id,
            'title': e.target.alt,
            'url': e.target.src
        }
        setGif(scopeGif)
     }
    
    return (
        <Link to={`/gif/${id}`}>
            <div className='img-container'>
                <img
                    loading='lazy'
                    src={url}
                    alt={title}
                    onClick={handleClick}
                />
                <h4 className="titulo-img">{ title }</h4>    
            </div>
        </Link>
       
    )
}

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  };
  Gif.defaultProps = {
    title: 'Gif animado'
  };