import React, { PureComponent } from 'react'
import Person from './Person/Person';

// PureComponent has shouldcomponent with all the props checked.
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] gerDerivedStateFromProps');
    //     return state;
    // }

    // use only when some of the props are to be checked.
    // optimization of the component. restrict the unneccesarry rendering of the component.
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(
    //       nextProps.persons !== this.props.persons ||
    //       nextProps.changed !== this.props.changed ||
    //       nextProps.clicked !== this.props.clicked
    //     ) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //     //return true; 
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot); 
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    render() {
        console.log('[Persons.js] rendering...');
        return (this.props.persons.map((person, index) => {

            return (
                
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}

              />
              
            );
          })
        )
      
      }

    

 
    };
      export default Persons;