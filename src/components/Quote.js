import React from "react";

class Quote extends React.Component {

  state = {
    quote: {}
  };

  componentDidMount(){
    const url = "//quotes.rest/qod.json?category=inspire";
    fetch(url)
      .then(result => {
        return result.json()
          .then(data => {
            const quote = data.contents.quotes[0];
            this.setState({quote});        
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  random(max){
      return Math.floor(Math.random() * Math.floor(max));
  }
  render() {
      const quote = this.state.quote;
      const styles = {
          backgroundColor: `rgba(${this.random(255)},${this.random(255)},${this.random(255)},1)`,
      }
    return <div className="quote" style={styles}>
        <div className="quote--text">{quote.quote}</div>
        <div className="quote--author">{quote.author}</div>
      </div>;
  }
}

export default Quote;
