import React from 'react';
import ReadingList from "./ReadingList";
import base from "../base";

class App extends React.Component {
  state = {
    readingList: {},
  };

  componentWillMount() {
    //this runs right before the app is rendered
    this.ref = base.syncState(`${this.props.match.params.listId}/list`, {
      context: this,
      state: "readingList"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addReadingItem = readingItem => {
    //update our state
    const readingList = { ...this.state.readingList };

    //add in our new fish
    const timestamp = Date.now();
    readingList[`item-${timestamp}`] = readingItem;

    //set state
    this.setState({ readingList });
  };

  render() {
    return <div class="reading-list">
        <h1>Put the {this.props.match.params.listId} app here</h1>
        <ReadingList readingList={this.state.readingList} listId={this.props.match.params.listId} />
      </div>;
  }
}



export default App;