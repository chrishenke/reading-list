import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import "./css/style.css";
import Welcome from "./components/Welcome";
import App from "./components/App";
import NotFound from "./components/NotFound";

const Root = (props) => {
    return <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/list/:listId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>;
}
render(<Root />, document.querySelector('#root'));