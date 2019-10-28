import React, { Component } from 'react';

class Child extends Component {
    render() {    
            return (
                <div>
                    Title: {this.props.dataFromParent}
                </div>
            );
        }
    }

export default Child;