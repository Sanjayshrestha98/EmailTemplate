import React, { useCallback, useContext, useMemo, useReducer, useState } from 'react'
import { BuilderContext } from '../../context/BuilderContext'
import _ from 'lodash';
import ColorPicker from '../../components/ColorPicker';

function Settings() {

    const { rootState, rootStyleDispatch } = useContext(BuilderContext)

    // const [width, setWidth] = React.useState(rootState.width);

    const getSliderValuePosition = useCallback((width) => {
        const min = 400;
        const max = 900;
        const range = max - min;
        const percent = ((width - min) / range) * 100;

        let shift = 0;
        if (percent <= 50) {
            shift = 8;
        } else if (percent >= 100) {
            shift = -8;
        }

        console.log(`hanyo - calc(${percent}% + ${shift}px)`)
        return `calc(${percent}% + ${shift}px)`;
    }, [rootState.width])


    const debouncedSetInput = useCallback(
        _.debounce((payload, type) => {
            rootStyleDispatch({ type: type, payload: payload })
        }, 700), // 500ms debounce delay
        []
    );


    const sliderPosition = useMemo(() => getSliderValuePosition(rootState.width), [rootState.width]);


    return (
        <div className="p-4 rounded-md text-xs ">
            {/* <h2 className="text-gray-800 font-semibold mb-4">GENERAL OPTIONS</h2> */}

            {/* Content Area Width */}
            <div className="mb-4">
                <label className=" text-gray-700">Content area width</label>
                <div className="flex items-center">
                    <div className='relative w-full h-12 flex justify-end'>
                        <div
                            className="absolute top-0 text-xs transform -translate-x-1/2 text-blue-500"
                            style={{ left: sliderPosition }}
                        >
                            {rootState.width}px
                        </div>

                        <input type="range" min="400" max="900" className='w-full accent-blue-500' name="rootWidthControl" value={rootState.width}
                            onChange={(e) => {
                                // setWidth(e.target.value)
                                rootStyleDispatch({ type: 'setWidth', payload: e.target.value })
                                // debouncedSetInput(e.target.value, "setWidth")
                            }
                            } />
                    </div>
                    {/* <span className="ml-2  text-blue-500">{rootState?.width}px</span> */}
                </div>
            </div>
            {/* Content Area Alignment */}
            <div className="mb-4 flex items-center justify-between">
                <label className=" text-gray-700">Content area alignment</label>
                <div className="flex mt-2 space-x-2">
                    <button
                        onClick={() => rootStyleDispatch({ type: 'setContentAlignment', payload: "left" })}
                        className={`px-3 py-1 rounded-md  ${rootState?.alignment === 'left' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                        LEFT
                    </button>
                    <button
                        onClick={() => rootStyleDispatch({ type: 'setContentAlignment', payload: "center" })}
                        className={`px-3 py-1 rounded-md  ${rootState?.alignment === 'center' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                        CENTER
                    </button>
                </div>
            </div>

            {/* Background Color */}
            <div className="mb-4 flex items-center justify-between">
                <label className=" text-gray-700">Background color</label>
                <div className='flex items-center gap-4 mt-2'>
                    <ColorPicker color={rootState?.backgroundColor} handleChange={debouncedSetInput} fieldName="setBackgroundColor" />
                    <input
                        type="text"
                        value={rootState?.backgroundColor}
                        onChange={(e) =>
                            debouncedSetInput(e.target.value, "setBackgroundColor")
                        }
                        className="border p-2 rounded-md w-24"
                    />

                </div>
            </div>

            {/* Content Area Background Color */}
            <div className="mb-4 flex items-center justify-between">
                <label className=" text-gray-700">Content area background color</label>
                <div className='flex items-center gap-4 mt-2'>

                    <ColorPicker color={rootState?.contentAreaBackgroundColor} handleChange={debouncedSetInput} fieldName="setContentAreaBackgroundColor" />

                    <input
                        type="text"
                        value={rootState?.contentAreaBackgroundColor}
                        onChange={(e) => {
                            debouncedSetInput(e.target.value, "setContentAreaBackgroundColor")
                        }}
                        className="border p-2 rounded-md w-24"
                    />
                    {/* <span>{rootState?.contentAreaBackgroundColor}</span> */}

                </div>
            </div>

            {/* Background Image Toggle */}
            <div className="flex items-center justify-between mb-4">
                <label className=" text-gray-700">Background image</label>
                <input
                    type="checkbox"
                    checked={rootState?.hasBackgroundImage}
                    onChange={(e) => rootStyleDispatch({ type: 'setHasBackgroundImage', payload: e.target.checked })}
                    className="h-5 w-5 text-blue-500"
                />
            </div>

            {/* Choose Image Button and URL Input */}
            {rootState?.hasBackgroundImage && (
                <div className="space-y-2 mb-4">
                    <button className="w-full bg-blue-500 text-white  py-2 rounded-md hover:bg-blue-600">
                        Choose image
                    </button>
                    <input
                        onKeyDown={(e) => {
                            // Handle keydown if needed, for example, updating the URL directly
                            if (e.key === 'Enter') {
                                rootStyleDispatch({ type: 'setUrl', payload: e.target.value });
                            }
                        }}
                        type="text"
                        placeholder="Url"
                        defaultValue={rootState?.url}
                        onBlur={(e) => rootStyleDispatch({ type: 'setUrl', payload: e.target.value })}
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
                                checked={rootState?.backgroundFit}
                                onChange={(e) => {
                                    rootStyleDispatch({ type: 'setFitToBackground', payload: e.target.checked })
                                }} // setFitToBackground)}
                                className="h-4 w-4 text-blue-500"
                            />
                            <label className=" text-gray-700">Fit to background</label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className=" text-gray-700">Repeat</label>
                            <input
                                disabled={rootState?.backgroundFit}
                                type="checkbox"
                                checked={rootState?.backgroundRepeat}
                                onChange={(e) => rootStyleDispatch({ type: 'setRepeat', payload: e.target.checked })}
                                className="h-4 w-4 text-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label className=" text-gray-700">Center</label>
                            <input
                                type="checkbox"
                                disabled={rootState?.backgroundFit}
                                checked={rootState?.backgroundCenter}
                                onChange={(e) => rootStyleDispatch({ type: 'setBackgroundCenter', payload: e.target.checked })}
                                className="h-4 w-4 text-blue-500"
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
            {/* <div className="mb-4">
                <label className=" text-gray-700">Default font</label>
                <select
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                    className="w-full mt-2 border h-10 rounded-md px-2"
                >
                    <option>Helvetica Neue</option>
                    <option>Arial</option>
                    <option>Times New Roman</option> 
                </select>
            </div> */}

            {/* Link Color */}
            <div className="mb-4 flex items-center justify-between">
                <label className=" text-gray-700">Link color</label>
                <div className='flex items-center gap-4 mt-2'>

                    <ColorPicker color={rootState?.linkColor} handleChange={debouncedSetInput} fieldName="setContentAreaBackgroundColor" />

                    <input
                        type="text"
                        value={rootState?.linkColor}
                        onChange={(e) => {
                            debouncedSetInput(e.target.value, "setLinkColor")
                        }}
                        className="border p-2 rounded-md w-24"
                    />
                    {/* <span>{rootState?.contentAreaBackgroundColor}</span> */}

                </div>
            </div>

        </div>
    )
}

export default Settings