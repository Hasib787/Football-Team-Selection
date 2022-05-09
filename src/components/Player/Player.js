import React from "react";
import { Button, Card } from "react-bootstrap";
import { addToDb, removeFromDb } from "../../fakeDB/storage";
import "./Player.style.css";

const Player = (props) => {
  const { id, name, image, salary } = props.player;
  const handleAddPlayer = (id) => {
    addToDb(id);
    console.log( id );
  };

  const handleRemovePlayer = (id) =>{
    removeFromDb(id)
    console.log(id);
  }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="p-4 text-center image" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <h4>${salary}</h4>
            <Button style={{marginRight: '5px'}} onClick={() => handleAddPlayer(id)} variant="primary">
              Add Player
            </Button>
            <Button onClick={() => handleRemovePlayer(id)} variant="primary">
              Remove Player
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
