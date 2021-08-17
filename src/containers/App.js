import React, { useState, useEffect } from 'react';
import DisplayCards from '../components/CardList';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //             .then(response => response.json())
    //             .then(users => this.setState({robots: users}));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(err => console.log('Something is wrong ---> ' + err));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
    return ((robots.length === 0) ? <h1 className="f2 tc">LOADING</h1> : (
        <div className='tc'>
            <h1 className="f2">Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <DisplayCards robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>                   
        </div>
    ));          
}

export default App;

