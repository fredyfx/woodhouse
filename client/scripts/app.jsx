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
                id: 1,
                name: 'Resource 1',
                reserved: true
            },
            {
                id: 2,
                name: 'Resource 2',
                reserved: false
            }
        ]
    },
    {
        name: 'Group 2',
        resources: [
            {
                id: 3,
                name: 'Resource 3',
                reserved: false
            },
            {
                id: 4,
                name: 'Resource 4',
                reserved: false
            }
        ]
    }
];

ReactDOM.render(<App groups={ sampleData } />, document.getElementById('root'));


