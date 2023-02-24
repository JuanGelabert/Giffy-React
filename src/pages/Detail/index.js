/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Gif from '../../components/Gif';
import GifContext from '../../context/GifContext'
// import Home from '../Home'

export default function Detail() {
    const {gif} = useContext(GifContext)
    console.log(gif);

    return <>
        {/* <Home /> */}
        <h3>{gif.title}</h3>
        <Gif
            id={gif.id}
            title={gif.title}
            url={gif.url}
        />
    </>
};
