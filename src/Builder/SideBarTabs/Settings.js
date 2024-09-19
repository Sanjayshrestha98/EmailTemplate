import React, { useContext } from 'react'
import { BuilderContext } from '../../context/BuilderContext'

function Settings() {

    const { contentWidth, setContentWidth } = useContext(BuilderContext)

    const getSliderValuePosition = () => {
        const min = 400;
        const max = 900;
        const range = max - min;
        const percent = ((contentWidth - min) / range) * 100;

        let shift = 0;
        if (percent <= 50) {
            shift = 8;
        } else if (percent >= 100) {
            shift = -8;
        }

        return `calc(${percent}% + ${shift}px)`;
    };

    return (
        <div>
            <label>Content Width</label>
            <div className='relative w-full h-12 flex justify-end'>
                <div
                    className="absolute top-0 text-xs transform -translate-x-1/2 text-purple-500"
                    style={{ left: getSliderValuePosition() }}
                >
                    {contentWidth}px
                </div>

                <input type="range" min="400" max="900" className='w-full' value={contentWidth} onChange={(e) => setContentWidth(e.target.value)} />
            </div>

        </div>
    )
}

export default Settings