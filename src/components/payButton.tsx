import React from 'react';
import './styles/payButton.scss'

const PayButton:React.FC = () => {
    return (
        <div>
            <button className={'pay-button'}>
                <span className="text">Buy now!</span>
            </button>
        </div>
    );
};

export default PayButton;