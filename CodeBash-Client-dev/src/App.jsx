import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import ChatPage from './pages/ChatPage/ChatPage.component';
import JoinPage from './pages/JoinPage/JoinPage.component';

const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={JoinPage} />
                <Route path="/chat" component={ChatPage} />
            </Switch>
        </Router>
    </div>
);

export default App;
