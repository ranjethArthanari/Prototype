import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => 
{
    const dispatch = this.props.dispath;
    const { loggedIn } = this.props.data;

    return (
     
        <div>
            
            <h1 style={"color: white"}>Bienvenido a Invbox </h1>
               <div>
                 <Link to="/">Home</Link>
               </div>
               <div>
                 <Link to="/login">Ingresar</Link>
                 <Link to="/register">Registrate</Link>
               </div>
    
        </div>
  
    );
  }



export default HomePage;