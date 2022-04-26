import React from 'react';
import './PlayersCart.style.css';

const PlayersCart = (props) => {
    const playerCart = props.playerCart;

    const salaryIns = 0;
    const totalBudget = playerCart.reduce((sum, player)=> sum + player.salary, salaryIns);
    return (
        <div className='cart-info'>
            <h2>Selected Players Info</h2>
            <h5>Total Player Selected: {playerCart.length}</h5>
            {
                playerCart.map(selectedPlayerName=><li>{selectedPlayerName.name}</li>)
            }

            <h4>Total Budget: $ {totalBudget}</h4>
        </div>
    );
};

export default PlayersCart;