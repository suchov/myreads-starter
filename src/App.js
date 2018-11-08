import React from 'react';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';

const BooksApp = () => {
  return (
    <div className="app" data-test="component-app">
      <Route exact path='/' component={ListBooks}/>
      <Route path='/search' component={SearchBooks}/>
    </div>
  )
}

export default BooksApp;
