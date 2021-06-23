import React from 'react';
import Card from './Card';

const DisplayCards = ({ robots }) => {
    /* const robots = props.robots; */
    return robots.map((user, index) => {
        return (
            <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
        );
    });
};

/* class CardList extends Component {
    constructor(props) {
        super(props);
        this.robots = props.robots;
    }
    render() {
        return this.robots.map((user, index) => {
            return (<Card key={index} id={user.id} name={user.name} email={user.email}/>);
        });
    }
} */

export default DisplayCards;

