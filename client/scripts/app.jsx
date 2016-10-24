import React from 'react';
import ReactDOM from 'react-dom';
import Group from './components/group-component.jsx';

class App extends React.Component{
    render(){
        const groups = this.props.groups;
        const groupItems = groups.map((group) => 
                        <Group key={ group.name } name={ group.name } resources={ group.resources } />);
        return (
            <div>
                { groupItems }
            </div>
        );
    }
}

const sampleData = [
    {
        name: 'Group 1',
        resources: [
            {
                name: 'Resource 1'
            },
            {
                name: 'Resource 2'
            }
        ]
    },
    {
        name: 'Group 2',
        resources: [
            {
                name: 'Resource 3'
            },
            {
                name: 'Resource 4'
            }
        ]
    }
];

ReactDOM.render(<App groups={ sampleData } />, document.getElementById('root'));


