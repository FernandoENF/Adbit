import React from 'react';
import {Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest}) {
    return (<Route {...rest} render={(props)=> {
        if(localStorage.getItem('token')) {
            return <Component/>;
        } else {
            return (
                <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
            );
        }
    }}
    />);
}
export default ProtectedRoute;