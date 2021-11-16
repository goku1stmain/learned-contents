import React,{useContext} from 'react';
import { MovieContext } from './moviecontext';

const Nav=()=>{
    const [movies,setmovies]=useContext(MovieContext)
    return(
        <div>
            <h3>Gokul js</h3>
            <p> list of movies : {movies.length}</p>
        </div>
    )
}

export default Nav;