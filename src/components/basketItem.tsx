import React from 'react';
import {AddedToBasketBurgerDto} from "../dto/addedToBasketBurger.dto";
import {useDispatch} from "react-redux";
import "./styles/basket.scss"
import DeleteButton from "./deleteButton";
import deleteButton from "./deleteButton";

const BasketItem:React.FC<AddedToBasketBurgerDto> = ({name,burgerId,price, count }) => {

    const dispatch = useDispatch();

    const deleteFromBasket = () => {
        dispatch({
            type:"REMOVE_ITEM_FROM_BASKET_REQUEST",
            payload: burgerId ,
        })}
    return (
        <div className={'basket-item'} key={burgerId}>
            <div>name: {name}</div>
            <div>price: {price}$</div>
            <div>count: {count}</div>
            <div>total cost: {price * count}$</div>
            <DeleteButton onClick={deleteFromBasket}/>
        </div>
    );
};

export default BasketItem;