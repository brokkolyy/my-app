import React from "react";
import "./CartItem.css";
import profileIcon from "../image/Line.svg"; 
import profileIcon2 from "../image/plus.svg"; 


const CartItem = ({ name, quantity, onAdd, onRemove }) => {
    return (
        <div className="cart-item">
            <div className="image-placeholder"></div>
            <div className="item-info">
                <div className="item-name">{name}</div>
                <div className="item-description">описание</div>
            </div>
            <div className="quantity-controls">
                <button className="quantity-button" onClick={onRemove}>
                <img src={profileIcon} alt="l" className="icon"/>
                </button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-button" onClick={onAdd}>
                <img src={profileIcon2} alt="p" className="icon"/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;