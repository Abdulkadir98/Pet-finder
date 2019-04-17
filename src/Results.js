import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";

const petfinder = pf();

class Results extends React.Component {
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
      <div className="search">
        <SearchBox />
        {this.state.pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              breed={pet.breeds.breed}
              name={pet.name}
              media={pet.media}
              id={pet.id}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
