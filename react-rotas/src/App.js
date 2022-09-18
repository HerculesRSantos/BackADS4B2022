import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './sobre';
import Usuario from './usuario';


export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
    <Link to='/sobre'>sobre</Link>
     <Link to='/usuario'>usuario</Link>
    </header>
    <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main></>
  );
}









