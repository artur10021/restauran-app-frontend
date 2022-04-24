import React, {useState} from 'react';
import {BurgerItemDto} from "../dto/burger-item.dto";
import "./styles/menu-item.scss";
import {useDispatch} from "react-redux";

const MenuItem:React.FC<BurgerItemDto> = ({name, price, id, ingredients, image },) => {

    const [inputCount, setInputCount] = useState(1);
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch({
            type:'ADD_BURGER_REQUEST',
            payload: {burgerId: id, count: inputCount, name: name, price: price}
        });
    }

    return (
        <div className='item-wrapper'>

            <img className={"item-img"}
                 alt={"item Img"}
                 src={require("/../development/restaurant-app/restaurant-app-backend/dist/static/"+ image)
            }/>
            <div>{name}</div>
            <div>{price}</div>
            <div>{id}</div>
            <div>{ingredients}</div>
            <input
                value={inputCount}
                onChange={(event:any)=>{setInputCount(event.target.value)}}
                type={"number"}
                min={1}
                max={20} />
            <button onClick={addToBasket}>добавить в корзину</button>
        </div>
    );
};

export default MenuItem;