import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import RF_home from '../Routes/Home/HomeContainer';
import TV from '../Routes/TV/TVContainer';
import Search from '../Routes/Search/SearchContainer';
import Detail from "../Routes/Detail/DetailContainer";
import Popol from "../Routes/Popol"


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Popol} />
            <Route path="/react-flix" exact component={RF_home} />
            <Route path="/react-flix/tv" component={TV} />
            <Route path="/react-flix/search" component={Search} />
            <Route path="/react-flix/movie/:id" component={Detail} />
            <Route path="/react-flix/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)
