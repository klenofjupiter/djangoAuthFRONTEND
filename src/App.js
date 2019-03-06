import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [ {
    "id":1,
    "title":"1st todo",
    "body":"Learn Django properly."
}, {
    "id":2,
    "title":"Second item",
    "body":"Learn Python."
}, {
    "id":3,
    "title":"Learn HTTP",
    "body":"It's important."
} ]


class App extends Component {
  state ={ list }
  render() {
    return (
      <div>
        <ol>
          {
            this.state.list.map( item => (
              <li key={item.id}>
                <b>{item.title}</b>:   <span>{item.body}</span> 
              </li>
             )
            )
          }
        </ol>
      </div>
    );
  }
}

export default App;
