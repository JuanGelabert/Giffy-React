import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'
import Home from '../Home'

export default function SearchResults({params}) {
    const { keyword } = params
    const { loading, gifs } = useGifs({keyword})
    
    return <>
        <Home />

        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>
};
