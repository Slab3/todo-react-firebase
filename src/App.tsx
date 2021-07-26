import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './styles/main.scss'
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Switch>
          <Route component={Home} path={"/"} exact />
          <Route component={SignUp} path={"/SignUp"} exact />
          <Route component={SignIn} path={"/SignIn"} exact />
        </Switch>
      </div>

    </BrowserRouter>
  )
};

export default App;
