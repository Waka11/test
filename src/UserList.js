import React, { Component } from "react";
import { connect } from "react-redux";

import "./UserList.css";

class UserList extends Component {
  render() {
    console.log("UL",this.props);
    return (
      <div className="UL">
        <b>{this.props.users.login}</b>
        <div className="item">
          <img
            src={this.props.users.avatar_url}
            alt={this.props.users.login}
          />
          <b>
            <a href={this.props.users.html_url}>
              {this.props.users.html_url}
            </a>
          </b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.Reducer
  };
};


export default connect(
  mapStateToProps,
  null
)(UserList);