import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ListInput from './components/listInput';
import ListItem from './components/listItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {id: 0, text: "Chipotle"},
        {id: 1, text: "Arbys"},
        {id: 2, text: "Burger King"}
      ],
      nextId: 3
    };

    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  addList(listText) {
    let lists = this.state.lists.slice();
    lists.push({id: this.state.nextId, text: listText});
    this.setState({
      lists: lists,
      nextId: ++this.state.nextId
    });
  }

  removeList(id) {
    this.setState({
        lists: this.state.lists.filter((list, index) => list.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="list-wrapper">
          <Header />
          <ListInput listText="" addList={this.addList} />
          <ul>
            {
              this.state.lists.map((list) => {
                return <ListItem list={list} key={list.id} id={list.id} removeList={this.removeList}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;