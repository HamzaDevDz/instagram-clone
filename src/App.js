import React from 'react';
import './App.css';
import {Header} from "./features/header/Header";
import {Posts} from "./features/posts/Posts";

function App() {
  return (
    <div className="app">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
