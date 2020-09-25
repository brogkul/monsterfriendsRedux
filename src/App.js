import './App.css';
import React, {Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }
    
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/brogkul/testDB/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !monsters.length ?
    <h1>Loading</h1> :
    (
      <div className = 'tc'>
        <h1 className = 'f-5 ma2'>Monster Friends</h1>
        <SearchBox searchChange=  {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList monsters = {filteredMonsters} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;