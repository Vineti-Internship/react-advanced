import React from 'react';
import {UserContext} from './user_context';
import {ThemeContext} from './theme_context';

export default
class UserInfo extends React.PureComponent {
  render(){
    return(
      <ThemeContext.Consumer>
      {
        theme => 
          <UserContext.Consumer>
            {
              user =>
                <React.Fragment>
                  <h1 style={{color: theme.foreground}}>{user.name}</h1>
                  <h3 style={{color: theme.foreground}}>{user.email || 'Email is private'}</h3>
                </React.Fragment>
            }
        </UserContext.Consumer>
      }
      </ThemeContext.Consumer>
      
    );
  }
};