import React from 'react';
import { connect } from 'react-redux'; 

class Countdelay extends React.Component{
    constructor( props ){
        super( props );
    }

    state = {
            currentCountTimer: null,
            currentCount: 0
    }

    componentDidMount(){
        let timer = setInterval( this.advanceCount, 1000 );
        this.setState( { currentCountTimer: timer } ); 
        console.log( '[ countdelay ] current state: ', this.state );
    }
    
    advanceCount(){
        this.setState( {
            currentCount: this.state.currentCount + 1
        } )
    }


    render(){

        if ( this.props.appState.isAuthenticated || this.props.appState.hasFailedAuthentication ){
            this.clearInterval( this.state.currentCountTimer );
            this.setState( { currentCount: 0 } ) 
        }

        return(
            <div>
                { this.props.appState.hasRequestAuthentication && 
                <div> 
                <div>{ this.state.currentCount }</div>
                    <p>If the count reaches 50 please refresh the screen</p>
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

