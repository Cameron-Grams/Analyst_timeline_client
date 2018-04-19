import React from 'react';
import { connect } from 'react-redux'; 

class Countdelay extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            currentCount: 0,
        }
    }

   

    componentDidMount(){
        this.timer = setInterval( this.advanceCount.bind( this ), 1000 );
        console.log( '[ countdelay ] current state: ', this.state );
    }
    
    advanceCount(){
        this.setState( {
            currentCount: this.state.currentCount + 1
        } )
    }

    componentWillUnmount(){
        clearInterval( this.timer );
        this.setState( { currentCount: 0 } ) 

    }

    render(){

        return(
            <div>
                { this.props.appState.hasRequestAuthentication && 
                <div> 
                <div className="css-currentCount" >{ this.state.currentCount }</div>
                <p>If the count reaches 50 please refresh the screen</p>
                <p>and log in again.  Thank you.</p>
                </div>
                }
            </div>
        )


    }

};

const mapStateToProps = ( state ) => ( {
    appState: state.appState 
} );

export default connect( mapStateToProps )( Countdelay ); 

