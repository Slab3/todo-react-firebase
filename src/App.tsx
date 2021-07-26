import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './styles/main.scss'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <h1>test</h1>
    </BrowserRouter>
  )
};

export default App;
