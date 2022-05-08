import React from 'react';
import Header from "./header";
import BgImg from "./bgImg";
import BasketItem from "./basketItem";
import { useSelector} from "react-redux";
import "./styles/basket.scss"
import {AddedToBasketBurgerDto} from "../dto/addedToBasketBurger.dto";
import PayButton from "./payButton";

const Basket:React.FC = () => {
    const addedBurgers = useSelector((state:any) => state.basketReducer.addedBurgers);

    return (
        <div>
            <div className={'basket-items'} >
                <h1>BASKET</h1>
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
                        <div>is empty</div>
                }

            </div>
            <PayButton />
        </div>
    );
};

export default Basket;