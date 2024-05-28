import React from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <img src={card} alt='ok' width={200} height={200}/>
                </div>
            ))}
        </div>
    );
};

export default CardList;
