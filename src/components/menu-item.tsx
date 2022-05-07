import React, {useState} from 'react';
import {BurgerItemDto} from "../dto/burger-item.dto";
import "./styles/menu-item.scss";
import "./styles/addToBasketButton.scss"
import {useDispatch} from "react-redux";

const MenuItem:React.FC<BurgerItemDto> = ({name, price, id, ingredients, image },) => {

    const [inputCount, setInputCount] = useState(1);
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch({
            type:'ADD_BURGER_TO_BASKET_REQUEST',
            payload: {burgerId: id, count: inputCount, name: name, price: price}
        });
    }

    return (
        <div className='item-wrapper'>

            <img className={"item-img"}
                 alt={"item Img"}
                 src={require("/../development/restaurant-app/restaurant-app-backend/dist/static/"+ image)
            }/>
            <div className={'burger-info'}>
                <div>name: {name}</div>
                <div>price: {price}$</div>
                <div>ingredients: {ingredients}</div>
            </div>

            <input
                className={'count-input'}
                value={inputCount}
                onChange={(event:any)=>{setInputCount(event.target.value)}}
                type={"number"}
                min={1}
                max={20} />

            <button className={'addToBasketButton'} onClick={addToBasket}>
                <span className="shadow"/>
                <span className="edge"/>
                <span className="front text">add to basket</span>
            </button>
        </div>
    );
};

export default MenuItem;