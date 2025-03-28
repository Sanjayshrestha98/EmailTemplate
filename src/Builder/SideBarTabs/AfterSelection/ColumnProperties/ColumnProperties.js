import React, { useCallback, useMemo } from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'
import { Trash2 } from 'lucide-react'
import NumberInput from '../../../../components/NumberInput'
import ColorPicker from '../../../../components/ColorPicker'

function ColumnProperties({ rowid, data }) {
 
    const { handleDeleteColumn, handleColumnStyleChange, selectedRow } = React.useContext(BuilderContext)

    const [showAllPaddingSides, setShowAllPaddingSides] = React.useState(data?.styles?.advancedPadding || false)
    const [showAllBorderSides, setShowAllBorderSides] = React.useState(data?.styles?.advancedBorder || false)

    const sides = ['Left', 'Right', 'Bottom', 'Top']
    const paddingSides = ['paddingLeft', 'paddingRight', 'paddingBottom', 'paddingTop']

    const borderSides = useMemo(() => [
        { id: 'borderLeft', label: 'Left' },
        { id: 'borderRight', label: 'Right' },
        { id: 'borderTop', label: 'Top' },
        { id: 'borderBottom', label: 'Bottom' }
    ], [])

    const handleAllPaddingSidesChange = useCallback((value) => {
        const sides = ['paddingLeft', 'paddingRight', 'paddingBottom', 'paddingTop']
        sides.forEach(async side => await handleColumnStyleChange(rowid, data.id, `padding.${side}`, value))
    }, [selectedRow.id, handleColumnStyleChange])

    const handleAllBorderChanges = () => {
        const sides = ['borderRight', 'borderTop', 'borderBottom']
        sides.forEach(side => handleColumnStyleChange(rowid, data.id, `${side}.width`, data?.styles?.borderLeft?.width))
        sides.forEach(side => handleColumnStyleChange(rowid, data?.id, `${side}.color`, data?.styles?.borderLeft?.color))
        sides.forEach(side => handleColumnStyleChange(rowid, data?.id, `${side}.type`, data?.styles?.borderLeft?.type))
    }

    const handleAllBorderSidesChange = useCallback((property, value) => {
        const sides = ['borderLeft', 'borderRight', 'borderTop', 'borderBottom']
        sides.forEach(side => handleColumnStyleChange(rowid, data.id, `${side}.${property}`, value))
    }, [selectedRow.id, handleColumnStyleChange])

    return (
        <>
            {
                data && <>
                    <div className='bg-white shadow p-4 text-xs'>
                        <div className='flex items-center justify-between'>

                            <label>Column </label>

                            <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => { handleDeleteColumn(rowid, data?.id) }}>
                                <Trash2 size={14} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between my-3">
                            <label>Column Background</label>
                            <div className='flex items-center gap-2 '>

                                <ColorPicker
                                    color={data?.styles?.backgroundColor || "#ffffff"}
                                    handleChange={(color) => handleColumnStyleChange(rowid, data.id, 'backgroundColor', color)}
                                    fieldName="backgroundColor"
                                />

                                <input
                                    type="text"
                                    value={data?.styles?.backgroundColor || "#ffffff"}
                                    onChange={(e) =>
                                        handleColumnStyleChange(rowid, data.id, 'backgroundColor', e.target.value)
                                    }
                                    className="border p-2 rounded-md w-24"
                                />
                            </div>
                        </div>

                        <hr />

                        <div className='mt-3'>
                            <div className='flex justify-between items-center gap-2 '>
                                <span className='font-semibold'>Padding</span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox"
                                        checked={showAllPaddingSides}
                                        onChange={(e) => {
                                            handleColumnStyleChange(rowid, data.id, 'advancedPadding', e.target.checked)
                                            setShowAllPaddingSides(e.target.checked)

                                            if (!e.target.checked) {
                                                handleAllPaddingSidesChange(data?.styles?.padding?.paddingLeft)
                                            }
                                        }} class="sr-only peer" />
                                    <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
                                </label>
                            </div>

                            {
                                showAllPaddingSides ?
                                    <>
                                        {
                                            paddingSides.map((side, index) => (
                                                <div className="my-4 flex flex-wrap items-center justify-between" key={index}>
                                                    <label className=" text-gray-700">{side.split('padding')[1]}</label>
                                                    <div className='flex items-center gap-2'>
                                                        <NumberInput max={30} min={0} step={1}
                                                            defaultValue={data?.styles?.padding?.[side]}
                                                            onChange={(value) =>
                                                                handleColumnStyleChange(rowid, data.id, `padding.${side}`, value)
                                                            }
                                                        />

                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                    :
                                    <div className="my-4 flex flex-wrap items-center justify-between">
                                        <label className=" text-gray-700">All Sides</label>
                                        <div className='flex items-center gap-2 '>

                                            <NumberInput max={30} min={0} step={1}
                                                defaultValue={data?.styles?.padding?.paddingLeft}
                                                onChange={(value) =>
                                                    handleAllPaddingSidesChange(value)
                                                }
                                            />

                                        </div>
                                    </div>
                            }
                        </div>
                        <hr />
                        <div className='mt-3'>
                            <div className='flex justify-between items-center gap-2 mt-5'>
                                <span className='font-semibold'>Border</span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox"
                                        checked={showAllBorderSides}
                                        onChange={(e) => {
                                            handleColumnStyleChange(rowid, data.id, 'advancedBorder', e.target.checked)
                                            setShowAllBorderSides(e.target.checked)

                                            if (!e.target.checked) {
                                                handleAllBorderChanges()
                                            }
                                        }} class="sr-only peer" />
                                    <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
                                </label>
                            </div>
                            {
                                showAllBorderSides ?
                                    <div className='mt-5'>
                                        {
                                            borderSides.map((side) => (
                                                <div key={side.id} className="mb-4 flex flex-wrap items-center justify-between">
                                                    <label className="text-gray-700">{side.label}</label>
                                                    <div className='flex items-center gap-2'>
                                                        <select
                                                            value={data?.styles?.[side.id]?.type || "none"}
                                                            onChange={(e) => handleColumnStyleChange(rowid, data.id, `${side.id}.type`, e.target.value)}
                                                            className="text-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                                                            <option value="none">None</option>
                                                            <option value="solid">Solid</option>
                                                            <option value="dashed">Dashed</option>
                                                            <option value="dotted">Dotted</option>
                                                        </select>

                                                        <NumberInput max={10} min={0} step={1}
                                                            defaultValue={data?.styles?.[side.id]?.width || 0}
                                                            onChange={(value) => handleColumnStyleChange(rowid, data.id, `${side.id}.width`, value)}
                                                        />

                                                        <div className="flex items-center justify-between">
                                                            <div className='flex items-center gap-2'>
                                                                <ColorPicker color={data?.styles?.[side.id]?.color || "#000000"}
                                                                    handleChange={(color) => handleColumnStyleChange(rowid, data.id, `${side.id}.color`, color)}
                                                                    fieldName={`${side.id}.color`} />
                                                                <input
                                                                    type="text"
                                                                    value={data?.styles?.[side.id]?.color}
                                                                    onChange={(e) => handleColumnStyleChange(rowid, data.id, `${side.id}.color`, e.target.value)}
                                                                    className="border p-2 rounded-md w-24"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="my-4 flex flex-wrap items-center justify-between">
                                        <label className="text-gray-700">All Sides</label>
                                        <div className='flex items-center gap-2'>
                                            <select
                                                value={data?.styles?.borderLeft?.type}
                                                onChange={(e) => handleAllBorderSidesChange(`type`, e.target.value)}
                                                className="text-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                                                <option value="none">None</option>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </select>

                                            <NumberInput max={10} min={0} step={1}
                                                defaultValue={data?.styles?.borderLeft?.width}
                                                onChange={(value) => handleAllBorderSidesChange(`width`, value)}
                                            />

                                            <div className="flex items-center justify-between">
                                                <div className='flex items-center gap-2'>
                                                    <ColorPicker color={data?.styles?.borderLeft?.color}
                                                        handleChange={(color) => handleAllBorderSidesChange(`color`, color)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={data?.styles?.borderLeft?.color}
                                                        onChange={(e) => handleAllBorderSidesChange(`color`, e.target.value)}
                                                        className="border p-2 rounded-md w-24"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div >
                    </div >
                </>
            }</>
    )
}

export default ColumnProperties