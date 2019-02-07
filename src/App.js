import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import UserList from "./UserList";
import show_info from "./action";
import { store } from "./index";



class App extends Component {
  state = {
    users: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      "https://api.github.com/search/users?o=desc&q=location%3ARivne&s=followers&type=Users&per_page=10"
    )
      .then(Response => Response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        });
        let user_info = this.state.users.items;
        store.dispatch(show_info(user_info));
      });
  }

  render() {
    const { isLoaded, users } = this.state;
    console.log("USERS", this.state);
    console.log("USERS2", this.props.users);
    return (
        <div className="App">
          {!isLoaded ? (
            <div>L o a d i n g . . .</div>
          ) : (
            <div>
              {this.state.users.items.map(iterator => {
                return (
                  <UserList
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

const mapStateToProps = (state) => {
  return {
    users: state.Reducer,
  }
}


export default connect(mapStateToProps,null)(App);
