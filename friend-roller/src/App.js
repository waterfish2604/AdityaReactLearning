import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      friends: [],
      searchedField: ''
    }


  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { friends: users };
      }
      ))
  }

  onChangeSearch = (event)=>{
    console.log(event.target.value);
    const searchedField = event.target.value.toLowerCase();
    this.setState(() => {
      return {searchedField}
    })
  };

  render() {

    const filteredFriends = this.state.friends.filter((friend) => {
      return friend.name.toLowerCase().includes(this.state.searchedField.toLowerCase()); 
    });

    return (
      <div className="App">
        <input className='search-bar' placeholder='search friend' type='search' 
        onChange={this.onChangeSearch}></input>
        {filteredFriends.map((friend) => {
          return <div key={friend.name}><h1>{friend.name}</h1></div>
        })}
      </div>
    );
  }

}

export default App;
