import React from 'react'
import { useState } from 'react';

const ToggleButon = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <button
                onClick={() => setIsOn(!isOn)}
                className={`w-[61px] h-7 flex items-center rounded-full p-1 transition-colors duration-300
        ${isOn ? "bg-green-500" : "bg-[#ADAAAA]"}`}
            >
                <span
                    className={`bg-white w-5 h-5 rounded-full transform transition-transform duration-300
          ${isOn ? "translate-x-6" : "translate-x-0"}`}
                />
            </button>
        </div>
    )
}

export default ToggleButon
