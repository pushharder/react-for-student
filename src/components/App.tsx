import * as React from 'react';

import IPage from './app.interfaces';

class App extends React.Component<IPage, {}> {
  public render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: {this.props.color}</p>
      </div>
    );
  }
}

export default App;
