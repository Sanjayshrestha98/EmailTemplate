import React, { useContext, useReducer } from 'react'
import { BuilderContext } from '../../context/BuilderContext'

function Settings() {

    const { rootState, rootStyleDispatch } = useContext(BuilderContext)

    const getSliderValuePosition = () => {
        const min = 400;
        const max = 900;
        const range = max - min;
        const percent = ((rootState?.width - min) / range) * 100;

        let shift = 0;
        if (percent <= 50) {
            shift = 8;
        } else if (percent >= 100) {
            shift = -8;
        }

        return `calc(${percent}% + ${shift}px)`;
    };

    return (
        <div className="p-2 rounded-md text-xs ">
            {/* <h2 className="text-gray-800 font-semibold mb-4">GENERAL OPTIONS</h2> */}

            {/* Content Area Width */}
            <div className="mb-4">
                <label className=" text-gray-700">Content area width</label>
                <div className="flex items-center">
                    <div className='relative w-full h-12 flex justify-end'>
                        <div
                            className="absolute top-0 text-xs transform -translate-x-1/2 text-purple-500"
                            style={{ left: getSliderValuePosition() }}
                        >
                            {rootState?.width}px
                        </div>

                        <input type="range" min="400" max="900" className='w-full accent-purple-500' name="rootWidthControl" value={rootState?.width} onChange={(e) => rootStyleDispatch({ type: 'setWidth', payload: e.target.value })} />
                    </div>
                    {/* <span className="ml-2  text-purple-500">{rootState?.width}px</span> */}
                </div>
            </div>

            {/* Content Area Alignment */}
            <div className="mb-4">
                <label className=" text-gray-700">Content area alignment</label>
                <div className="flex mt-2 space-x-2">
                    <button
                        onClick={() => rootStyleDispatch({ type: 'setContentAlignment', payload: "left" })}
                        className={`px-3 py-1 rounded-md  ${rootState?.alignment === 'left' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                        LEFT
                    </button>
                    <button
                        onClick={() => rootStyleDispatch({ type: 'setContentAlignment', payload: "center" })}
                        className={`px-3 py-1 rounded-md  ${rootState?.alignment === 'center' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                        CENTER
                    </button>
                </div>
            </div>

            {/* Background Color */}
            <div className="mb-4">
                <label className=" text-gray-700">Background color</label>
                <div className='flex items-center gap-4 mt-2'>
                    <input
                        type="color"
                        value={rootState?.backgroundColor}
                        onChange={(e) => rootStyleDispatch({ type: 'setBackgroundColor', payload: e.target.value })}
                        className="w-10 h-10   border rounded-md"
                    />
                    <span>{rootState?.backgroundColor}</span>
                </div>
            </div>

            {/* Content Area Background Color */}
            <div className="mb-4">
                <label className=" text-gray-700">Content area background color</label>
                <div className='flex items-center gap-4 mt-2'>

                    <input
                        type="color"
                        value={rootState?.contentAreaBackgroundColor}
                        onChange={(e) => rootStyleDispatch({ type: 'setContentAreaBackgroundColor', payload: e.target.value })}
                        className="w-10 h-10 mt-2 border rounded-md"
                    />
                    <span>{rootState?.contentAreaBackgroundColor}</span>

                </div>
            </div>

            {/* Background Image Toggle */}
            <div className="flex items-center justify-between mb-4">
                <label className=" text-gray-700">Background image</label>
                <input
                    type="checkbox"
                    checked={rootState?.hasBackgroundImage}
                    onChange={(e) => rootStyleDispatch({ type: 'setHasBackgroundImage', payload: e.target.checked })}
                    className="h-5 w-5 text-purple-500"
                />
            </div>

            {/* Choose Image Button and URL Input */}
            {rootState?.hasBackgroundImage && (
                <div className="space-y-2 mb-4">
                    <button className="w-full bg-purple-500 text-white  py-2 rounded-md hover:bg-purple-600">
                        Choose image
                    </button>
                    <input
                        type="text"
                        placeholder="Url"
                        value={rootState?.url}
                        // onChange={(e) => setUrl(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 "
                    />
                </div>
            )}

            {/* Fit to Background, Repeat, Center Options */}
            {rootState?.hasBackgroundImage && (
                <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                // checked={rootState?.fitToBackground}
                                // onChange={(e) => setFitToBackground(e.target.checked)}
                                className="h-4 w-4 text-purple-500"
                            />
                            <label className=" text-gray-700">Fit to background</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className=" text-gray-700">Repeat</label>
                            <input
                                type="checkbox"
                                // checked={rootState?.repeat}
                                // onChange={(e) => setRepeat(e.target.checked)}
                                className="h-4 w-4 text-purple-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label className=" text-gray-700">Center</label>
                            <input
                                type="checkbox"
                                // checked={rootState?.center}
                                // onChange={(e) => setCenter(e.target.checked)}
                                className="h-4 w-4 text-purple-500"
                            />
                        </div>
                    </div>

                    {/* Supporting Text */}
                    <p className="text-xs text-gray-500 mt-2">
                        Background image support varies across email clients. Choose a fallback content area background color for optimal results.
                    </p>
                </div>
            )}

            {/* Default Font */}
            <div className="mb-4">
                <label className=" text-gray-700">Default font</label>
                <select
                    // value={font}
                    // onChange={(e) => setFont(e.target.value)}
                    className="w-full mt-2 border h-10 rounded-md px-2"
                >
                    <option>Helvetica Neue</option>
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    {/* Add more font options as needed */}
                </select>
            </div>

            {/* Link Color */}
            <div className="mb-4">
                <label className=" text-gray-700">Link color</label>
                <input
                    type="color"
                    // value={linkColor}
                    // onChange={(e) => setLinkColor(e.target.value)}
                    className="w-full h-10 mt-2 border rounded-md"
                />
            </div>
        </div>
    )
}

export default Settings