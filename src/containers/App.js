import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
        <div className="tc grow br3 pa3 ma2 dib bw2">
          <a
            className="link"
            href="https://github.com/garfield-spst/robo-friends"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
        <div className="tc grow br3 pa3 ma2 dib bw2">
          <a
            className="link"
            href="http://garfield-spst.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surya Pratap Singh
          </a>
        </div>
      </div>
    );
  }
}

export default App;
