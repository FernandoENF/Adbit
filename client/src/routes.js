import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisaoGeral from './views/app/VisaoGeral'
import Redirecionar from './views/user/Redirecionar'
import SignIn from './views/user/SignIn'
import SignUp from './views/user/SignUp'
import ResetarSenha from './views/user/ResetarSenha'
import MeusLinks from './views/app/MeusLinks'

function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <VisaoGeral/>
            </Route>
            <Route path="/sign-in">
                <SignIn/>
            </Route>
            <Route path="/sign-up">
                <SignUp/>
            </Route>
            <Route path="/resetar-senha">
                <ResetarSenha/>
            </Route>
            <Route path="/meus-links">
                <MeusLinks/>
            </Route>
            <Route path="/:uri">
                <Redirecionar/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;