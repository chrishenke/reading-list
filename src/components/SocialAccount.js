import React from "react";

class SocialAccount extends React.Component{
    render(){
        return (
        <li>
            {console.log(this.props)}
            <a title={this.props.details.name} href={this.props.details.link} target="_blank">
              <i className={`fa ${this.props.details.icon}`}></i>
            </a>
        </li>
        )
        ;
    }
}

export default SocialAccount;