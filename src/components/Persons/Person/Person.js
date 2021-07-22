import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth.context'
// import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext; // shorter an easier and can be used in class based component. this is the way to access on class based components.
componentDidMount() {
  //this.inputElement.focus();
  this.inputElementRef.current.focus();
  console.log(this.context.authenticated);
}

  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className="Person" style={style}>
      <Aux> 
      
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
      
        
        <p onClick={this.props.click}>
         I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
        type="text"
        //ref={(inputEL) => {this.inputElement = inputEL}} 
        ref={this.inputElementRef}
        onChange={this.props.changed} 
        value={this.props.name} />
      </Aux>
 // React.fragment can be use instead of Aux. both works as same.
 // Aux is used to wrap the child JSX component. alternatively it can be done using passing the JSX in array.      
      
    );
  }
  
  
};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);


// two approch for providing the reference. (both are use in class component)
// 1. function approach (one that is comment out)
// 2. class component approach, with the use of constructor (one that is in use, works in newer version)