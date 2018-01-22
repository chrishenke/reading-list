import React from 'react';
import SocialAccount from '../components/SocialAccount';
import accounts from "../accounts-list";

const Welcome = (props) => {
    return <div className="welcome">
        <h1>Hi, I’m Chris!</h1>
        <h2>
          Connect with me
          <br />
          @chrishenke
        </h2>
        <ul className="connect">
          {Object.keys(accounts).map(key => (
            <SocialAccount key={key} details={accounts[key]} />
          ))}
        </ul>
      </div>;
}

export default Welcome;