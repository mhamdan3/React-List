import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ListInput from './components/listInput';
import ListItem from './components/listItem';
import dragula from 'react-dragula';

// var App = React.createClass({
//   render: function () {
//     return <div className='container'>
//       <div>Swap me around</div>
//       <div>Swap her around</div>
//       <div>Swap him around</div>
//       <div>Swap them around</div>
//       <div>Swap us around</div>
//       <div>Swap things around</div>
//       <div>Swap everything around</div>
//     </div>;
//   },
//   componentDidMount: function () {
//     var container = React.findDOMNode(this);
//     dragula([container]);
//   }
// });
// React.render(<App />, document.getElementById('examples'));

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

  componentDidMount() {
    dragula([document.getElementById('drag-list')]).on('drop', (a, b) => console.log(a));
  }

  render() {
    return (
      <div className="App">
        <div className="list-wrapper">
          <Header />
          <ListInput listText="" addList={this.addList} />
          <ul id="drag-list">
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