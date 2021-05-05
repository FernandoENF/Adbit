import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisaoGeral from './views/app/VisaoGeral'
import Redirecionar from './views/user/Redirecionar'
import SignIn from './views/user/SignIn'
import SignUp from './views/user/SignUp'
import ResetarSenha from './views/user/ResetarSenha'
import MeusLinks from './views/app/MeusLinks'
import Axios from 'axios'
import ProtectedRoute from './components/common/ProtectedRoute'

function Routes() {
    useEffect(() => {
        Axios.get("http://localhost:8081/api/login").then((response) => {
            console.log(response)
        });
    }, []);

    const [isAuth, setIsAuth] = useState(false);
    return(
    <BrowserRouter>
        <Switch>
            <ProtectedRoute exact path="/" component={VisaoGeral} isAuth={isAuth}/>
            <Route path="/sign-in">
                <SignIn/>
            </Route>
            <Route path="/sign-up">
                <SignUp/>
            </Route>
            <Route path="/resetar-senha">
                <ResetarSenha/>
            </Route>
            <ProtectedRoute path="/meus-links" component={MeusLinks} isAuth={isAuth}/>
            <Route path="/:uri">
                <Redirecionar/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;