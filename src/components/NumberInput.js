import React, { useState } from 'react';

function NumberInput({ max, min, step, onChange, defaultValue }) {

    const [number, setNumber] = useState(defaultValue || 0);

    const handleIncrement = () => {
        if (number < max) {
            setNumber(prevNumber => {
                const newNumber = prevNumber + step;
                if (newNumber > max) return max
                onChange(newNumber); // Call onChange when value changes
                return newNumber;
            });
        }
    }

    const handleDecrement = () => {
        if (number > min) {
            setNumber(prevNumber => {
                const newNumber = prevNumber - step;
                if (newNumber < min) return min
                onChange(newNumber); // Call onChange when value changes
                return newNumber;
            });
        }
    }

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= min && value <= max) {
            setNumber(value);
            onChange(value); // Call onChange when the input value is manually changed
        }
    }

    return (
        <div className='flex items-center border '>
            <button className='px-2 text-lg border-r hover:bg-blue-100' onClick={handleDecrement}>-</button>
            <input
                className='w-10 p-1 text-center focus:outline-none appearance-none no-spinner'
                type="number"
                value={number}
                onChange={handleInputChange} // Update the number on manual input change
            />
            <button className='px-2 text-lg border-l hover:bg-blue-100' onClick={handleIncrement}>+</button>
        </div>
    );
}

export default NumberInput;
