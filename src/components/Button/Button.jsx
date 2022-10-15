import React, { useState } from 'react';
import './style.css'

const Button = ({ 
    children = 'Button', 
    loading = false, 
    disabled = false,
    type,
    onClick
}) => {
    return (
        <>
            <button 
            onClick={onClick}
            className={!disabled && !loading ? 'btn' : 'btn btn--disabled'} 
            disabled={loading || disabled}
            type={type}
            >
                { !loading ? children : 'loading...'}
            </button>
        </>
    );
}

export default Button;
