import React from 'react';

export default class Resource extends React.Component{
    render(){
        return (
            <div>
                <label>{ this.props.name }</label>
            </div>
        );
    }
}