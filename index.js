import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const people = [
  { id: 1, name: "Peter Parker" },
  { id: 2, name: "Matt Murdock" },
  { id: 3, name: "Wally West" },
  { id: 4, name: "Wade Wilson" },
  { id: 5, name: "Clark Kent" },
  { id: 5, name: "Bruce Wayne" }
];

class People extends React.Component {
  render() {
    const { people } = this.props;
    const peopleData = people.map(person => <Person key={person.id} person={person.name} />);

    return <div className="people">{peopleData}</div>;
  }
}

class Image extends React.Component {
  state = {
    divStyle: {
      borderColor: "red",
      borderStyle: "solid"
    }
  };
  num = Math.floor(Math.random() * 100);
  url = `https://placeimg.com/300/300/people?h=300&w=300&random=${this.num}`;

  render() {
    return <img style={this.state.divStyle} onClick={this.handleClick} src={this.url} />;
  }

  handleClick = event => {
    const { borderColor } = this.state.divStyle;

    if (borderColor === "red") {
      this.setState({
        divStyle: {
          ...this.state.divStyle,
          borderColor: "blue"
        }
      });
    } else {
      this.setState({
        divStyle: {
          ...this.state.divStyle,
          borderColor: "red"
        }
      });
    }
  };
}

class Person extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <div className="person">
        <div className="image">
          <Image />
        </div>
        <div className="details">{person}</div>
      </div>
    );
  }
}

const element = <People people={people} />;

ReactDOM.render(element, rootElement);
