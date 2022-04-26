import React from "react";
import { Button, Card } from "react-bootstrap";
import './Player.style.css';

const Player = (props) => {
  const { name, email, image, salary } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="p-4 text-center image"  variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <h4>${salary}</h4>
          <Button onClick={()=>handleAddPlayer(props.player)} variant="primary">Add Player</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
