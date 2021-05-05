import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisaoGeral from './views/app/VisaoGeral'
import Redirecionar from './views/user/Redirecionar'
import SignIn from './views/user/SignIn'
import SignUp from './views/user/SignUp'
import ResetarSenha from './views/user/ResetarSenha'
import MeusLinks from './views/app/MeusLinks'
import Axios from 'axios'
import ProtectedRoute from './components/common/ProtectedRoute'
import Home from './views/user/Home'
import { AuthContext } from "./helpers/AuthContext"

function Routes() {
    const [isAuth, setIsAuth] = useState(false);
    

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setIsAuth(true)
        }
    }, []);

    const userAuth = () => {
        Axios.get('http://localhost:8081/api/isUserAuth', {
            headers: {
                "adbit-acess-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            if(response.data === true){
                setIsAuth(true)
            }
            console.log(response)
        })
    }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <ProtectedRoute path="/dashboard" component={VisaoGeral} isAuth={isAuth} />
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/resetar-senha">
                        <ResetarSenha />
                    </Route>
                    <ProtectedRoute path="/meus-links" component={MeusLinks} isAuth={isAuth} />
                    <Route path="/:uri">
                        <Redirecionar />
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
export default Routes;