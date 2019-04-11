import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, breed, media, location, animal, id } = this.props;

    let photos = media.photos.photo.filter(photo => photo["@size"] === "pn");

    return (
      <Link to={`/details/${id}`}>
        <div className="pet">
          <div className="image-container">
            <img src={photos[0].value} alt={name} />
          </div>
          <div className="info">
            <h1>{name}</h1>
            <h2>
              {animal} - {breed} - {location}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default Pet;
