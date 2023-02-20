import React from 'react'
import { Link } from 'wouter'
import Buscador from '../../components/Buscador'
import ListOfGifs from '../../components/ListOfGifs'

export default function SearchResults({keyword}) {
    
    return (
        <>
            <Link to='/'><h1>Giffy</h1></Link>
            <h3>
                <i>El mejor buscador de Gifs hecho en React</i>
            </h3>

            <Buscador />

            <p>Resultados de <i>{ keyword }</i></p>
            <ListOfGifs keyword={keyword} />
        </>
    )
};
