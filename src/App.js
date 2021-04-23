import { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
         {
            name: 'Leanne Graham',
            email: 'Hello@gmail.com',
            id: 1
         },
         {
            name: 'Ervin Howell',
            email: 'Hello@gmail.com',
            id: 2
         },
         {
            name: 'Clementine Bauch',
            email: 'Hello@gmail.com',
            id: 3
         },
         {
            name: 'Patricia Lebsack',
            email: 'Hello@gmail.com',
            id: 4
         },
         {
            name: 'Chelsey Dietrich',
            email: 'Hello@gmail.com',
            id: 5
         },
         {
            name: 'Mrs. Dennis',
            email: 'Hello@gmail.com',
            id: 6
         },
         {
            name: 'Kurtis Weissnat',
            email: 'Hello@gmail.com',
            id: 7
         },
         {
            name: 'Nicholas',
            email: 'Hello@gmail.com',
            id: 8
         },
      ],
      searchField: '',
    };

  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => response.json())
  //       .then(users => this.setState({ monsters : users }))
  // }

  handleChange = e => {
     this.setState({ searchField: e.target.value })
  }

  render() {
     const { monsters, searchField } = this.state;
     const filteredMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(searchField.toLowerCase())
     );

    return (
        <div className="App">
          <SearchBox
              placeholder='search monsters'
              handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;



