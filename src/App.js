import React from 'react';
import './App.css';
import Movies from './components/Movies/data';
import MovieList from './components/Movies/List';

export const App = () => {
  return (
    <MovieList data={Movies}/>
  );
}

export default App;
