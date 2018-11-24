import React from 'react';
import ButtonExample from './context/app';
import ErrorExample from './error_boundary/app';
import RefExample from './refs/app';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ButtonExample /> */}
        {/* <ErrorExample /> */}
        <RefExample />
      </div>
    );
  }
}

export default App;
