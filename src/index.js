import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import ReactGA from "react-ga";
import "./css/style.css";
import Welcome from "./components/Welcome";
import App from "./components/App";
import Quote from "./components/Quote"
import NotFound from "./components/NotFound";

ReactGA.initialize("UA-30480517-1", { debug: true });
ReactGA.pageview(window.location.pathname + window.location.search);
const Root = (props) => {
    return <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/quote" component={Quote} />
          <Route path="/list/:listId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>;
}
render(<Root />, document.querySelector('#root'));