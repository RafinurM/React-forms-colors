import React, { useState } from "react";

function hex2rgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function ColorSwitcher() {
    let [rgb, setRgb] = useState('rgb(0, 0, 0)')
    let regExp = /^#\p{Hex_Digit}\p{Hex_Digit}\p{Hex_Digit}\p{Hex_Digit}\p{Hex_Digit}\p{Hex_Digit}$/gu;
    function checkColor(event) {
        if (event.target.value.length != 7) return
        if (!regExp.test(event.target.value)) {
            setRgb( () => rgb = 'Ошибка!') 
        } else {
            document.body.style.backgroundColor = event.target.value;
            setRgb (() => rgb = `rgb(${hex2rgb(event.target.value).r}, ${hex2rgb(event.target.value).g}, ${hex2rgb(event.target.value).b})`)
        }
        }


return <div className="container">
    <form>
        <input className="hex-input box" type='text' name='hex-input' placeholder="#......" onChange={checkColor} maxLength='7'></input>
    </form>

    <div className="rgb-output box">
        <span className="rgb-output-text">{rgb}</span>
    </div>
</div>
}

export default ColorSwitcher