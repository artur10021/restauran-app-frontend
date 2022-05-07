import React, {Dispatch, SetStateAction} from 'react';
import './styles/modal.scss'


interface modalProps {
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}


const Modal:React.FC<modalProps> = ({isActive,setIsActive, children}) => {
    return (
        <div className={isActive? "modal active" : "modal"} onClick={()=>setIsActive(false)}>
            <div className={'modal__content'} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal