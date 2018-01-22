import React from 'react';

class AddItemForm extends React.Component {
  
  createReadingItem(event) {
    event.preventDefault();
    const readingItem = {
      url: this.url.value
    };
    this.props.addReadingItem(readingItem);
    this.itemForm.reset();
  }
  render() {
    return <form ref={input => (this.itemForm = input)} onSubmit={this.createReadingItem.bind(this)}>
        <input ref={input => (this.url = input)} name="url" type="text" placeholder="http://www.website.com" />
        <button type="submit">+ Add Item</button>
      </form>;
  }
}

export default AddItemForm;