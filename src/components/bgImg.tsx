import React from 'react';
import bgImg from "../images/bgimg1.jpg";
import "./styles/bgImg.scss"

const BgImg:React.FC = () => {
    return (
        <div>
            <img className={'bgImg'} src={bgImg} alt={'bgImg'}/>
        </div>
    );
};

export default BgImg;

