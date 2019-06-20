import React from 'react';

class App extends React.Component {

  state = { resource: 'Posts' }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({resource: 'Posts'})}>Posts</button>
          <button onClick={() => this.setState({resource: 'ToDos'})}>ToDos</button>
        </div>
        <span>{this.state.resource}</span>
      </div>
    );
  }
}

export default App;