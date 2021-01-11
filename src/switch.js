import React from 'react';
import './switch.css'

function Switch() {
    return(
        <div className="dark-mode">
            <p className="dark-mode-title"> Dark Mode </p>
            <input type="checkbox" className="checkbox" id="checkbox0" />
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    );
}

export default Switch