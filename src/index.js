import React from 'react';
import { render } from 'react-dom';
import Welcome from './components/Welcome'
import "./css/style.css";

class Root extends React.Component{
    render(){
        return(
            <Welcome />
        );
    }
}

render(<Root />, document.querySelector('#app'));