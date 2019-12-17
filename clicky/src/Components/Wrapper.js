import React, { Component } from "react";
import Element from "./Element";
import Nav from "./Nav";



class Wrapper extends Component {
  // Setting the component's initial state
  state = {
    elements: [
      { img: "./img/00.png", id: "a" },
      { img: "./img/01.jpg", id: "b" },
      { img: "./img/02.jpg", id: "c" },
      { img: "./img/03.jpg", id: "d" },
      { img: "./img/04.jpg", id: "e" },
      { img: "./img/05.jpg", id: "f" },
      { img: "./img/06.jpg", id: "g" },
      { img: "./img/07.jpg", id: "h" },
      { img: "./img/08.jpg", id: "i" },
      { img: "./img/09.jpg", id: "j" },
      { img: "./img/10.png", id: "k" },
      { img: "./img/11.jpg", id: "l" }
    ],
    clickedElements: []
  };

  handleOnClick = event => {
    console.log("hello hamrah");
    // Getting the value and name of the input which triggered the change
    const { id } = event.target;
    this.state.clickedElements.forEach(element => {
      console.log(id, element.id);
      if (id === element.id) {
        console.log("lost");
        this.setState(() => {
          return { clickedElements: [] };
        });
        return (
          console.log("heyyyy"),
          <div>
            
            <Nav result={"you lost!"}></Nav>
          </div>
        );
      }
    });
    this.state.clickedElements.push({ id: id });
    this.shuffle();
    console.log(this.state.clickedElements);
  };
  shuffle = () => {
    const a = this.state.elements;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return this.setState(a);
  };
  render() {
    return (
      <div className="row w-100 justify-content-center">
        {this.state.elements.map(result => (
          <div style={{ height: "300px", width: "25%" }} key={result.id}>
            <Element
              value={result.img}
              id={result.id}
              onClick={this.handleOnClick}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Wrapper;
