import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log(this);
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const dataResults = await data.json();
    // console.log(dataResults);
    // const names = await dataResults.map(items => items.name)
    const users = await this.setState({ monsters: dataResults });
   
    
    
    //console.log(names);
   
  }

  handleChange =  e => {

    this.setState({ searchField: e.target.value })
    
  }

  render () {
const { monsters, searchField } = this.state;
const filteredMonsters = monsters.filter(monster => 
  monster.name.toLowerCase().includes(searchField.toLowerCase())
);


    return (
      <div className="App">
        <h1>Monsters Rolodex by ISH and YiHUA!</h1>
         <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
         />
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
  
}

export default App;
