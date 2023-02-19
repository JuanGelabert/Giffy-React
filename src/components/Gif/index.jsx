import React from 'react'

export default function Gif({title, id, url}) {
    return (
        <div className='img-container'>
            <img src={url} alt={title} />
        </div>
    )
}