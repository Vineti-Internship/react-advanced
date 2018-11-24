import React from 'react';

export default
class RefExample extends React.Component {
  constructor(){
    super();

    this.inputRef = React.createRef();
  }

  componentDidMount(){
    const input = this.inputRef.current;
    input.value = "FOCUS DID NOT WORK";
  }

  render(){
    return(
      <div>
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
};