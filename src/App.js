import React from 'react';
import './App.css';
import {Header} from "./features/header/Header";
import {Posts} from "./features/posts/Posts";
import {SignIn} from "./features/user/SignIn";
import {SignUp} from "./features/user/SignUp";
import {Upload} from "./features/upload/Upload";

function App() {
  return (
    <div className="app">
      <Header />
      <Upload />
      <Posts />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
