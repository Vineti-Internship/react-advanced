import React from 'react';
import { ThemeContext } from './theme_context';

// class ThemedButton extends React.Component {
//   render() {
//     return (
//       <button
//         {...this.props}
//         style={{backgroundColor: this.context.background}}
//       />
//     );
//   }
// }
// ThemedButton.contextType = ThemeContext;

class ThemedButton extends React.Component {
  render(){
    return(
      <ThemeContext.Consumer>
        {context => (
          <button
            {...this.props}
            style={{backgroundColor: context.background}}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
};

export default ThemedButton;