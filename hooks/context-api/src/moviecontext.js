import React,{useState,createContext} from 'react';
// context api for managing states in the movie context api 
// cretaing a conext
export const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const [movies,setmovies]=useState([
        {
            name:"harry",
            price:"$10",
            id:23143,
        },
        {
            name:"harry namew ",
            price:"$10",
            id:23143,
        },{
            name:"harry name",
            price:"$10",
            id:23143,
        },
    ]);
    return(
        <MovieContext.Provider value={[movies,setmovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}