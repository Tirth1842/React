import React ,{ Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errormessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errormessage: error})
    }
    render(){
        if (this.state.hasError){
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children;
        }
        
    }

}

export default ErrorBoundary;

