import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import Axios from 'axios';


function Child() {
    let { uri } = useParams();
    console.log(uri)
    const redirect = () => {
        Axios.post('http://localhost:8081/api/links/redirecionar', {
            uri: uri,
        }).then((response) => {
            if (response.data.error) {
                window.location.replace("./404")
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
