import React from 'react';
import { Link } from 'react-router-dom'; 
import './button.css'; 

const Button = ( props ) => (  
            <div className={ ` myButtonClass ${ props.divStyling }`  } >
            <button className={ `${ props.className }` } onClick={ props.clickHandler } >
                { props.sendPath ?   
                
                    <Link className="routingLink" to={ props.sendPath } >
                    { props.buttonLable } 
                    </Link>
                :
                <span>{ props.buttonLable }</span>
                }
            </button>
            </div>
);

export default Button; 