import React from 'react'
import { Link, Route } from 'wouter'
import Buscador from '../../components/Buscador'
import SearchResults from '../SearchResults'

export default function Home() {
    
    return (
        <>
            <Link to='/'>Giffy</Link>
            <h3><i>El mejor buscador de Gifs hecho en React</i></h3>

            <Buscador />
            <Route
                component={SearchResults}
                path="/search/:keyword"
            />
        </>
    )
};
