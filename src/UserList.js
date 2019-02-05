import React, { Component } from "react";
import "./UserList.css";

class UserList extends Component {
  render() {
    return (
      <div className="UL">
        <b>{this.props.User}</b>
        <div className="item">
          <img src={this.props.Image} alt={this.props.User} />
          <b>
            <a href={this.props.URL}>{this.props.URL}</a>
          </b>
        </div>
      </div>
    );
  }
}

export default UserList;
