import React, {useState} from 'react';
import "./styles/administration.page.scss"
import Modal from "../components/modal";
import {useDispatch, useSelector} from "react-redux";
import {addBurger} from "../api/nemu.api";
import {BurgerItemDto} from "../dto/burger-item.dto";


const AdministrationPage:React.FC = () => {

    const [isGetUsersModalActive, setGetUsersModalActive] = useState(false)
    const [isAddRoleModalActive, setAddRoleModalActive] = useState(false)
    const [isAddBurgerModalActive, setAddBurgerModalActive] = useState(false)
    const [isGetBurgersModalActive, setGetBurgersModalActive] = useState(false)

    const burgersFromBD = useSelector((state:any) => state.menuReducer.burgers)
    console.log(burgersFromBD)

    const [formInput, setFormInput] = useState('');
    const [formInput2, setFormInput2] = useState('');
    const [formInput3, setFormInput3] = useState('');
    const [formInput4, setFormInput4] = useState('');

    const dispatch = useDispatch();

    const deleteUser = async (e: any, user:any) => {
        e.preventDefault();
        dispatch({
            type: "DELETE_USER_REQUEST",
            payload: {
                email: user.email,
            }
        })
        setFormInput('')
    }

    const users = useSelector((state:any)=>state.usersReducer.users)

    const getAll = async (e:any) => {
        e.preventDefault();
        dispatch({
            type: "GET_USERS_REQUEST",
        })
    }

    const addRole = async (e:any) => {
        e.preventDefault();
        dispatch({
            type: "ADD_USER_ROLE_REQUEST",
            payload: {
                userId: formInput,
                value: formInput2
            }
        })
        setFormInput('')
        setFormInput2('')
    }

    const getAllMenu = async (e:any) => {
        e.preventDefault();
        dispatch({
            type: "LOAD_BURGERS_REQUEST",
        })
    }

    const deleteItemFromMenu = async (e: any, burgerId: number) => {
        e.preventDefault();
        dispatch({
            type: "DELETE_BURGER_REQUEST",
            payload: {
                burgerId: burgerId,
            }
        })
        setFormInput('')
    }

    const addBurgerToMenu = async (e:any) => {
        e.preventDefault();

        dispatch({
            type: "ADD_BURGER_TO_MENU_REQUEST",
            payload: {
                name: formInput,
                price: Number(formInput2),
                ingredients: formInput3,
                image: formInput4
            }
        })
        setFormInput('')
        setFormInput2('')
        setFormInput3('')
        setFormInput4('')
    }

    return (
        <div>
            <div className={'admin-panel'}>
                <h1>ADMIN PANEL</h1>

                <button
                    className={'admin-button'}
                    onClick={()=>{setGetUsersModalActive(true)}}
                >
                    GET ALL USERS
                </button>

                <button
                    className={'admin-button'}
                    onClick={()=>setAddRoleModalActive(true)}
                >
                    ADD ROLE FOR USER
                </button>

                <button
                    className={'admin-button'}
                    onClick={()=>setGetBurgersModalActive(true)}
                >
                    GET ALL MENU
                </button>

                <button
                    className={'admin-button'}
                    onClick={()=>setAddBurgerModalActive(true)}
                >
                    ADD BURGER TO MENU
                </button>
            </div>

            <Modal isActive={isGetUsersModalActive} setIsActive={setGetUsersModalActive}>
                <button  onClick={getAll}>get users</button>
                <p>users:</p>
                {
                    users?

                        users.map((user:any)=>{
                        return <div key={user.id}>
                            * name: {user.email}, id: {user.id},  roles: {user.roles.map((role:any)=> role.value + " ")}
                            <button  onClick={(e:any)=>deleteUser(e,user)}>delete</button>
                        </div>

                    })
                        : <div>no users</div>
                }
            </Modal>

            <Modal isActive={isAddRoleModalActive} setIsActive={setAddRoleModalActive}>
                <form>
                <p>enter user id:</p>
                <input value={formInput} placeholder={"user id"} onChange={(e:any)=>setFormInput(e.target.value)} type={"text"}/>
                <p>enter role</p>
                <input value={formInput2} placeholder={"role"} onChange={(e:any)=>setFormInput2(e.target.value)} type={"text"}/>
                <button onClick={addRole} >ADD ROLE</button>
                </form>
            </Modal>

            <Modal isActive={isGetBurgersModalActive} setIsActive={setGetBurgersModalActive}>
                <button  onClick={getAllMenu}>get menu</button>
                <p>menu:</p>
                {
                    burgersFromBD.length?

                        burgersFromBD.map((burger:BurgerItemDto)=>{
                            return <div key={burger.id}>
                                * burger: {burger.name}, id: {burger.id}, price: {burger.price}, ingredients: {burger.ingredients}
                                <button  onClick={(e:any)=>deleteItemFromMenu(e,burger.id)}>delete</button>
                            </div>

                        })
                        : <div>is empty</div>
                }
            </Modal>

            <Modal isActive={isAddBurgerModalActive} setIsActive={setAddBurgerModalActive}>
                <form onSubmit={addBurgerToMenu}  id={'addBurgerForm'}>
                <p>
                    <input value={formInput} placeholder={"name"} onChange={(e:any)=>setFormInput(e.target.value)} type={"text"}/>
                </p>
                <p>
                    <input value={formInput2} placeholder={"price"} onChange={(e:any)=>setFormInput2(e.target.value)} type={"number"}/> $
                </p>
                <p>
                    <input value={formInput3} placeholder={"ingredients"} onChange={(e:any)=>setFormInput3(e.target.value)} type={"text"}/>
                </p>
                <p>
                    <input onChange={(e:any)=>setFormInput4(e.target.files[0])} placeholder={"image"} accept=".jpg"  type={"file"}/>
                </p>
                <input type="submit"/>
                </form>
            </Modal>
        </div>
    );
};

export default AdministrationPage;