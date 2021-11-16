import React, { useState,useContext } from 'react';
import { MovieContext } from './moviecontext';

const MovieList=()=>{
    const [movies,setmovies]=useContext(MovieContext)

    return (
        <div>
            <h1>value</h1>
            {
                movies.map(p=>(
                <p>{p.name}</p>))
            }
        </div>
    );
}

export default MovieList;