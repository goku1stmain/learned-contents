import React from 'react';
import Movielist from './Movielist';
import Nav from './nav';
import AddMovie from './Addmovie';
import { MovieProvider } from './moviecontext';
function App() {
  return (
    <MovieProvider>
 <div className="App">
      <Nav />
      <AddMovie />
     <Movielist/>
    </div>
    </MovieProvider>
   
  );
}

export default App;
