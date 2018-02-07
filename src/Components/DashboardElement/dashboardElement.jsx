import React from 'react';

const DashboardElement = ( props ) => {
    return(
        <div className="displayBox"  >
            <p>{ props.elementTitle }</p>
            <p>{ props.elementContent }</p>
        </div>
    )
};

export default DashboardElement; 