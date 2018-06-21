import React from 'react';
import './listInput.css';

export default class ListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.listText};

    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addList(list) {
    if (list.length > 0) {
      this.props.addList(list);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addList(this.state.value)}>Submit</button>
      </div>
    );
  }
}