import React from 'react'; // need to be imported when JSX has to be render.

// const withClass = props => (
//     <div className={props.classes}>
//        {props.children}
//     </div>
// );

// another way.

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;