import React from 'react';
import { Link } from "react-router-dom";

const Home = () =>{
    return (
       <div>
          <h1>página inicial</h1>
           <nav>
                <ul>
                    <li>
                    <Link to='/sobre'>sobre</Link>
                    </li>
                    <li>
                    <Link to='/usuario'>Usuario</Link>
                    </li>   
           </ul>
           </nav>
       </div>
   );
}

export default Home;