import React,{useState,useContext} from "react";
import { MovieContext } from "./moviecontext";


const AddMovie=()=>{
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [movies,setmovies]=useContext(MovieContext)
    const updatename=(e)=>{
        setname(e.target.value)
    }
    const updateprice=(e)=>{
        setprice(e.target.value)
    }
    const addMovie=e=>{
        e.preventDefault()
        setmovies(prevmovies => [...prevmovies,{name:name,price:price}])
    }
    
    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updatename}></input>
            <input type="text" name="name" value={price} onChange={updateprice}></input>
            <button>submit</button>
            

        </form>
    );
}

export default AddMovie;