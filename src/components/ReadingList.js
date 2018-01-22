import React from 'react';
import base from "../base";
import { auth, provider } from "../base";
import AddItemForm from "./AddItemForm";

class ReadingList extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.authHandler(null, { user });
      }
    });
  }

  authenticate = () => {
    auth.signInWithPopup(provider).then(result => {
      const uid = result.user.uid;
      this.setState({ uid });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({ uid: null });
    });
  };

  authHandler = (err, authData) => {
    if (err) {
      console.log(err);
      return;
    }
    
    base.fetch(this.props.listId,{
      context: this
    })
    .then(listData => {
      console.log(listData);
      if (!listData.owner) {
        console.log("no owner");
        base
          .post(this.props.listId, {
            data: {
              owner: authData.user.uid
            }
          })
          .then(
            console.log('done with post')
          )
          .catch(err => {
            console.log(err);
          });
      }
      this.setState({
        uid: authData.user.uid,
        owner: listData.owner || authData.user.uid
      });
    });                                 
  }; 

  renderList = key => {
    const listItem = this.props.readingList[key];
    return (
      <div className="reading-item" key={key}>
        {listItem.url}
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div className="login">
        <h2>Your Reading List</h2>
        <p>Sign in to manage your reading list.</p>
        <div class="buttons">
          <button className="github" onClick={() => this.authenticate()}>
            Log in with Github
          </button>
        {/* <button className="facebook" onClick={() => this.authenticate("facebook")}>Log in with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate("twitter")}>Log in with Twitter</button> */}
        </div>
      </div>
    );
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    //check if user is not logged in
    if (!this.state.uid) {
      return this.renderLogin();
    }
    //check if logged in user is store owner
    else if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of this store!</p>
          {logout}
        </div>
      );
    }
    else {
      return <div className="reading-list">
          {logout}
          <AddItemForm addReadingItem={this.addReadingItem} readingList={this.state.readingList} />
          {Object.keys(this.props.readingList).map(this.renderList)}
        </div>;
    }
  }
}

export default ReadingList;