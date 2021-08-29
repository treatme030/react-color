import React, { useEffect, useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, hexColor, index }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb) // 함수 사용해서 hex 표현
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    },[alert])
    return (
        <article className={`color ${index > 10 && 'color-light'}`} 
        style={{backgroundColor:`rgb(${bcg})`}}
        onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)//텍스트 복사하기 
        }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
            {/* 다른 방법 <p className="color-value">{hexValue}</p> */}
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;