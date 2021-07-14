import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'4646546',name: 'Max', age: 28 },
      { id:'4644444',name: 'Manu', age: 29 },
      { id:'8766565',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showperson: false
  };

  

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons});
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showperson;
    this.setState({showperson: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer '

    };

    let persons = null;

    if (this.state.showperson){
      persons = (
            <div>
                {this.state.persons.map((person, index) => {
                  return <Person
                  click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangeHandler(event, person.id)}
                    />
                })
                }
              
            </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p> 
        {/* function can be inefficient, try to use bind method instead of function method */}
        <button
        style={style} 
        onClick={this.togglePersonHandler}>Toggle Persons </button> 
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

