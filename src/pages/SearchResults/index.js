import React from 'react'
import { Link } from 'wouter'
import Buscador from '../../components/Buscador'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'

export default function SearchResults({params}) {
    const { keyword } = params
    const { loading, gifs } = useGifs({keyword})
    
    return <>
        <Link to='/'>Giffy</Link>
        <h3><i>El mejor buscador de Gifs hecho en React</i></h3>

        <Buscador />

        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>
};
