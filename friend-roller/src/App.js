import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstName: "Aditya", lastName: "Wankhede"},
      company: "XYZ Corp."
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi! My name is {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button className='name-changer' onClick={() => {
            this.setState(() => {
              return {
                name: {firstName: "Adam", lastName: "Cage"}
              }
            })
          }}>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
