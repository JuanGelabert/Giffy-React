import React from 'react'
import './styles.css'


export default function Gif({title, id, url}) {
    return <div className='img-container'>
        <img src={url} alt={title} />
        <div class="titulo-img">{ title }</div>    
    </div>
}