import React from 'react';
import './listItem.css';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeList(id) {
    this.props.removeList(id);
  }

  render() {
    return (
      <div className="listWrapper">
        <button className="removeList" onClick={(e)=> this.removeList(this.props.id) }>remove</button>{this.props.list.text}
      </div>
    );
  }
}