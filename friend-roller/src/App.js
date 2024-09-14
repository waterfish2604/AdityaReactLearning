import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      friends: [
        { name: 'Aditya' },
        { name: 'Subodh' },
        { name: 'Rohan' },
        { name: 'Soham' },
        { name: 'Omkar' },
        { name: 'Priyank' },
        { name: 'Shannen' },
        { name: 'Deep' },
        { name: 'Anish' },
        { name: 'Ayush' },
        { name: 'Elsa' },
        { name: 'Vaibhav' }
      ]
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

  render() {
    return (
      <div className="App">
        <input className='search-bar'></input>
        {this.state.friends.map((friends) => {
          return <div key={friends.name}><h1>{friends.name}</h1></div>
        })}
      </div>
    );
  }

}

export default App;
