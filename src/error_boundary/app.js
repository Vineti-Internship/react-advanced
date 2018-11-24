import React from 'react';
import ErrorBoundary from './error_boundry';

class WithError extends React.Component {
  render(){
    // throw new Error('asdasd');
    return (
      <h1>HEYYY I am inside error boundary</h1>
    );
  }
};

export default
class App extends React.Component {
  render(){
    return (
      <ErrorBoundary>
        <WithError />
      </ErrorBoundary>
    );
  }
}