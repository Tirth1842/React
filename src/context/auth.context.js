import React from 'react';

const authContext = React.createContext({
    authenticate: false,
    login: () => {}
});

export default authContext;

// this is used when their is long chain of props and we want to skip the middle one. 
//1. contains: - context as props. - use provider at defining stage -- uses consumer at final stage.
// context API  is all about managing data across components without the need to pass data around with props