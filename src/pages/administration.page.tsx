import React, {useState} from 'react';
import "./styles/administration.page.scss"
import Modal from "../components/modal";
import {useDispatch, useSelector} from "react-redux";
import {addBurger} from "../api/nemu.api";


const AdministrationPage:React.FC = () => {

    const [isGetUsersModalActive, setGetUsersModalActive] = useState(false)
    const [isAddRoleModalActive, setAddRoleModalActive] = useState(false)
    const [isAddBurgerModalActive, setAddBurgerModalActive] = useState(false)

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

    const addBurgerToMenu = async (e:any) => {
        e.preventDefault();
        const f = new FormData()

        const form = document.getElementById('addBurgerForm')

        if(form){
            form.addEventListener('change', function (event) {
                const { files } = event.target;

                Object.values(files).forEach(function (file, index) {
                    f.append(index, file);
                });
            });

        }

        // f.set('name', formInput)
        // f.set('image', formInput4, 'image')
        await  addBurger(f)
        // dispatch({
        //     type: "ADD_BURGER_TO_MENU_REQUEST",
        //     payload: {
        //         name: formInput,
        //         price: formInput2,
        //         ingredients: formInput3,
        //         image: formInput4
        //     }
        // })
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

            <Modal isActive={isAddBurgerModalActive} setIsActive={setAddBurgerModalActive}>
                <form onSubmit={addBurgerToMenu} id={'addBurgerForm'}>
                <p>enter name</p>
                <input value={formInput} placeholder={"name"} onChange={(e:any)=>setFormInput(e.target.value)} type={"text"}/>
                <p>enter price</p>
                <input value={formInput2} placeholder={"price"} onChange={(e:any)=>setFormInput2(e.target.value)} type={"text"}/>
                <p>enter ingredients</p>
                <input value={formInput3} placeholder={"ingredients"} onChange={(e:any)=>setFormInput3(e.target.value)} type={"text"}/>
                <p>enter image</p>
                <input value={formInput4} placeholder={"image"} onChange={(e:any)=>setFormInput4(e.target.value)} type={"file"}/>
                <input type="submit"/>
                </form>

            </Modal>
        </div>
    );
};

export default AdministrationPage;