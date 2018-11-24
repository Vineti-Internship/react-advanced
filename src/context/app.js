import React from 'react';
import {ThemeContext, themes} from './theme_context';
import {UserContext, user} from './user_context';
import ThemedButton from './themed_button';
import UserInfo from './user_info';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default
class App extends React.Component {

  state = {
    theme: themes.light,
    user
  };

  toggleTheme = () => this.setState(state => ({
    theme:
      state.theme === themes.dark
        ? themes.light
        : themes.dark
  }));

  async componentDidMount(){
    try {
      const res = await fetch('https://api.github.com/users/rasjonell');
      const user = await res.json();
      this.setState({user});
    }
    catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={this.state.user}>
            <Toolbar changeTheme={this.toggleTheme} />
            <UserInfo />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}