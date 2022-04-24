import React, {useEffect} from 'react';
import MenuItem from "./menu-item";
import {BurgerItemDto} from "../dto/burger-item.dto";
import "./styles/list-item.scss"
import {useDispatch, useSelector} from "react-redux";

const ListItems: React.FC = () => {
    const burgers = useSelector((state:any) => state.menuReducer.burgers)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch({type: "LOAD_BURGERS_REQUEST"})
    },[])

    return (
        <div className={"wrapper"}>
            <div className="list-wrapper">
                {burgers.map((item:BurgerItemDto) => <MenuItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    ingredients={item.ingredients}
                /> )}
            </div>
        </div>

    );
};

export default ListItems;