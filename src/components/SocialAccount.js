import React from "react";
import PropTypes from "prop-types";

class SocialAccount extends React.Component{
    render(){
        return (
        <li>
            <a title={this.props.details.name} href={this.props.details.link} target="_blank">
              <i className={`fa ${this.props.details.icon}`}></i>
            </a>
        </li>
        )
        ;
    }
}

SocialAccount.propTypes = {
    details: PropTypes.object.isRequired
}

export default SocialAccount;