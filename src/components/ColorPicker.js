import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import useClickOutside from '../hooks/useClickOutside';

function ColorPicker({ color, handleChange, fieldName }) {
    const [open, setOpen] = useState(false);

    const divRef = useRef(null);

    const close = useCallback(() => setOpen(false), []);
    useClickOutside(divRef, close);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="h-6 w-6 border rounded hover:shadow"
                style={{ backgroundColor: color }}
            ></button>

            {open && (
                <div ref={divRef} className="absolute left-0 top-8 p-1 z-50">
                    <HexAlphaColorPicker
                        color={color}
                        onChange={(e) => { handleChange(e, fieldName); }}
                    />
                </div>
            )}
        </div>
    );
}

export default ColorPicker;
