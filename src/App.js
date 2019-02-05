import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";

class App extends Component {
  state = {
    users: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      "https://api.github.com/search/users?o=desc&q=location%3ARivne&s=followers&type=Users"
    )
      .then(Response => Response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        });
        console.log("USERS", json);
      });
  }

  render() {
    const { isLoaded, users } = this.state;
    console.log("USERS", this.state.users);

    return (
      <div className="App">
        {!isLoaded ? (
          
            <div>L o a d i n g . . .</div>
          
        ) : (
          <div>
            {this.state.users.items.map(iterator => {
              return (
                <UserList
                  {...this.props}
                  Image={iterator.avatar_url}
                  User={iterator.login}
                  URL={iterator.html_url}
                  key={iterator.id}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
