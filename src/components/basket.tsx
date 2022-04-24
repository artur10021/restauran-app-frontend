import React, {useEffect} from 'react';
import Header from "./header";
import BgImg from "./bgImg";
import BasketItem from "./basketItem";
import {useDispatch, useSelector} from "react-redux";
import {AddedToBasketBurgerDto} from "../dto/addedToBasketBurger.dto";

const Basket:React.FC = () => {
    const addedBurgers = useSelector((state:any) => state.basketReducer.addedBurgers);

    return (
        <div>
            <Header/>
            <BgImg/>
            {
                addedBurgers.length
                    ?
                    addedBurgers.map((item:AddedToBasketBurgerDto)=>
                        <BasketItem
                            key={item.burgerId}
                            name={item.name}
                            price={item.price}
                            burgerId={item.burgerId}
                            count={item.count}
                        />
                    )
                    :
                    <div>Корзина пуста</div>
            }

        </div>
    );
};

export default Basket;