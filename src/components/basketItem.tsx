import React from 'react';
import {AddedToBasketBurgerDto} from "../dto/addedToBasketBurger.dto";
import {useDispatch} from "react-redux";

const BasketItem:React.FC<AddedToBasketBurgerDto> = ({name,burgerId,price, count }) => {

    const dispatch = useDispatch();

    const deleteFromBasket = () => {
        dispatch({
            type:"REMOVE_ITEM_FROM_BASKET_REQUEST",
            payload: burgerId ,
        })}
    return (
        <div>
            <div>{name}</div>
            <div>{burgerId}</div>
            <div>{price}</div>
            <div>{count}</div>
            <div>total cost: {price * count}</div>
            <button onClick={deleteFromBasket}>delete</button>
        </div>
    );
};

export default BasketItem;