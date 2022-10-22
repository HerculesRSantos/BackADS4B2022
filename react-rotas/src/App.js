import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './sobre';
import Usuario from './usuario';
import Contato from './contato';
import CallApi from './CallApi';

export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
    <p><Link to='/sobre'>sobre</Link></p>
    <p><Link to='/contato'>Contato</Link></p>
    <p><Link to='/CallApi'>CallApi</Link></p>
     <Link to='/usuario'>usuario</Link>
    </header>
    <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/contato' component= {Contato}/>
          <Route path='/CallApi' component= {CallApi}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main></>
  );
}









