import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect
} from "react-router-dom";
import Axios from 'axios';
import P404 from '../Pagina404'


function Child() {
    let { uri } = useParams();
    console.log(uri)
    const redirect = () => {
        Axios.post('http://localhost:8081/api/links/redirecionar', {
            uri: uri,
        }).then((response) => {
            if (response.data.error) {
                <Route>
                    <P404 />
                </Route>
                window.location.replace("https://www.google.com")
            } else {
                window.location.replace(response.data.url);
            }
        });
    }
    redirect()
    return (
        <div></div>
    )
}
export default function Params() {
    return (
        <Router>
            <Switch>
                <Route path="/:uri" children={<Child />} />
            </Switch>
        </Router>

    );
}
