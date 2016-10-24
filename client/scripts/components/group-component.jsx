import React from 'react';
import Resource from './resource-component.jsx';

export default class Group extends React.Component{
    render(){
        const resources = this.props.resources;
        const resourceItems = resources.map((resource) => 
                            <Resource key={resource.name} id={resource.id} name={resource.name} reserved={resource.reserved}/>);
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3>{ this.props.name }</h3>
                    { resourceItems }
                </div>
            </div>
        );
    }
}