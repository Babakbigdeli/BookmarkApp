import {} from "react-router-dom";
import { RiBookMarkLine } from "react-icons/ri";
import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import Login from "./LoginButton";
import Logout from "./LogoutButton";

function Navbar() {
  //state = { activeItem: 'home' }

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //const { activeItem } = this.state

  return (
    <div>
      <Menu pointing secondary>
        <Segment position="down">
          Bookmark
          <RiBookMarkLine />
        </Segment>
        <Menu.Item
          name="home"
          //active={activeItem === 'home'}
          //onClick={this.handleItemClick}
        />
        <Menu.Item
          name="user page"
          //active={activeItem === 'user'}
          // onClick={this.handleItemClick}
        />

        <Menu.Item name="login" onClick={Login} />
      </Menu>
    </div>
  );
}

export default Navbar;
