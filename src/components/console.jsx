import React, { Component } from 'react';
class  Console extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container">
            console {this.props.text}
        </div> );
    }
}
 
export default Console;