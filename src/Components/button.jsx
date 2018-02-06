import React from 'react';
import { Link } from 'react-router-dom'; 
import './button.css'; 

const Button = ( props ) => (  
            <div className={ ` myButtonClass ${ props.className } `  } >
            <button onClick={ props.clickHandler } >
                <Link className="routingLink" to={ props.sendPath } >
                { props.buttonLable } 
                </Link>
            </button>
            </div>
);

export default Button; 