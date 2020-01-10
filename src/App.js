import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list";
import './App.css';
import {SearchBox} from "./components/search-box/search-box";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    handleChange = e => {
        this.setState({searchField: e.target.value})
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        const {monsters, searchField} = this.state;
        const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1> Monsters Rolodex </h1>
                <SearchBox
                    placeholder='Search Monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filterdMonsters}/>
            </div>
        );
    }
}

export default App;
