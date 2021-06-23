import React, { Component } from 'react';
import DisplayCards from '../components/CardList';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({'searchfield': event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        return ((this.state.robots.length === 0) ? <h1 className="f2 tc">LOADING</h1> : (
                <div className='tc'>
                    <h1 className="f2">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <DisplayCards robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>                   
                </div>
            ));          
    }
}

export default App;

