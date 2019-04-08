import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import { Pet } from "./Pet";

const petfinder = pf();
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle. WA" })
      .then(data => {
        let pets;
        if (data.petfinder.pets) {
          pets = data.petfinder.pets.pet;
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <div>
          {this.state.pets.map(pet => {
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                breed={pet.breed}
                name={pet.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
