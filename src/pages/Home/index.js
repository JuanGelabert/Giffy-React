import React from 'react'
import {Link} from 'wouter'
import Buscador from '../../components/Buscador'

export default function Home() {
    
    return (
        <>
            <Link to='/'>Giffy</Link>
            <h3><i>El mejor buscador de Gifs hecho en React</i></h3>

            <Buscador />
        </>
    )
};
