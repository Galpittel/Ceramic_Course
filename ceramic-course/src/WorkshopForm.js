import React, { useState } from 'react';
import './WorkshopForm.css';

function WorkshopForm() {
    const [numPeople, setNumPeople] = useState(1);
    const [isPrivate, setIsPrivate] = useState(false);
    const [price, setPrice] = useState(0);

    function calculatePrice() {
        let basePrice = 350;
        if (isPrivate && numPeople < 6) {
            basePrice = Math.round(basePrice * 1.15);
        }
        setPrice(basePrice * numPeople);
    }

    return (
        <div className="WorkshopForm">
            <h2>Workshop Price Calculator</h2>
            <label>
                Number of people:
                <input type="number" value={numPeople} min="1" max="10" onChange={e => setNumPeople(parseInt(e.target.value))} className="WorkshopForm__input" />
            </label>
            <br />
            <label>
                Private course:
                <input type="checkbox" checked={isPrivate} onChange={e => setIsPrivate(e.target.checked)} className="WorkshopForm__checkbox" />
            </label>
            <br />
            <button onClick={calculatePrice} className="WorkshopForm__button">Calculate price</button>
            <p className="WorkshopForm__price">Price: ₪{price}</p>
        </div>
    );
}

export default WorkshopForm;
