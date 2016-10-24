import React from 'react';

export default class Resource extends React.Component{
    constructor(props){
        super(props);
        
        this.handleReleaseClick = this.handleReleaseClick.bind(this);
        this.handleReserveClick = this.handleReserveClick.bind(this);
    }
    
    handleReleaseClick(){
        console.log('released resource ' + this.props.id);
    }
    
    handleReserveClick(){
        console.log('reserved resource ' + this.props.id);
    }
    
    render(){
        const reserveButton = (this.props.reserved) ? 
            <button className="btn btn-warning" onClick={ this.handleReleaseClick }>Release</button> :
            <button className="btn btn-primary" onClick={ this.handleReserveClick }>Reserve</button>;
        
        return (
            <div>
                <label>{ this.props.name }</label>
                <div className="form-inline">
                    <div className="form-group">
                        <label>Reserve for:</label>
                        <select className="form-input">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                        &nbsp;
                        Hours
                        &nbsp;
                        { reserveButton }
                    </div>
                </div>
            </div>
        );
    }
}