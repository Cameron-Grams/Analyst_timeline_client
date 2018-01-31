import React from 'react';
import { Link } from 'react-router-dom'; 


const Button = ( props ) => (  
            <div className={ props.className } >
            <button onClick={ props.whenClicked } >
                <Link className="routingLink" to={ props.sendPath } >
                { props.buttonLable } 
                </Link>
            </button>
            </div>
);

export default Button; 