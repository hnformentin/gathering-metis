import { Route, Router, Switch } from 'react-router';

import CardPage from './Pages/CardPage';
import React from 'react';
import SearchPage from './Pages/SearchPage';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/card/:query">
                    <CardPage></CardPage>
                </Route>
                <Route path="/">
                    <SearchPage></SearchPage>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
