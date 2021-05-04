import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import Pagina404 from '../Pagina404'


function Child() {
    let { uri } = useParams();
    if (uri === "google") {
        window.location.replace("https://www.google.com/")
    } else {
        return (
            <Router>
                <Switch>
                    <Route>
                        <Pagina404/>
                    </Route>
                </Switch>
            </Router>
        )
    }
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
