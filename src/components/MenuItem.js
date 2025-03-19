import React from 'react';
import './MenuItem.css';

function MenuItem({ name, quantity = 0, onAdd, onRemove }) {
    return (
        <div className="menu-item">
            <div className="item-image"></div>
            <div className="item-info">
                <div className="item-name">{name}</div> 
                {quantity > 0 ? (
                    <div className="quantity-controls">
                        <button className="quantity-button" onClick={onRemove}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-button" onClick={onAdd}>+</button>
                    </div>
                ) : (
                    <button className="add-button" onClick={onAdd}>+</button>
                )}
            </div>
        </div>
    );
}

export default MenuItem;
