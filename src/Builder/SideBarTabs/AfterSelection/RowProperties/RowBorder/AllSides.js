import React, { useCallback, useContext } from 'react'
import { BuilderContext } from '../../../../../context/BuilderContext'
import ColorPicker from '../../../../../components/ColorPicker'
import NumberInput from '../../../../../components/NumberInput';

function AllSides() {

    const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

    const handleAllSidesChange = useCallback((property, value) => {
        const sides = ['borderLeft', 'borderRight', 'borderTop', 'borderBottom']
        sides.forEach(side => handleRowStyleChange(selectedRow.id, `${side}.${property}`, value))
    },[selectedRow.id, handleRowStyleChange])

    return (
        <div className="mb-4 flex flex-wrap items-center justify-between">
            <label className=" text-gray-700">All Sides</label>
            <div className='flex items-center gap-2 '>
                <select
                    defaultValue={selectedRow?.styles?.borderLeft?.type}
                    onChange={(e) => {
                        handleAllSidesChange('type', e.target.value)
                    }}
                    className="text-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                    <option value="none">None</option>
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>

                </select>

                <NumberInput max={10} min={0} step={1}
                    defaultValue={selectedRow?.styles?.borderLeft?.width}
                    onChange={(value) =>
                        handleAllSidesChange('width', value)
                    }
                />

                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-2 '>
                        <ColorPicker color={selectedRow?.styles?.borderLeft?.color} handleChange={(color) => handleAllSidesChange('color', color)} fieldName="borderColor" />
                        <input
                            type="text"
                            value={selectedRow?.styles?.borderLeft?.color}
                            onChange={(e) =>
                                handleAllSidesChange('color', e.target.value)
                            }
                            className="border p-2 rounded-md w-24"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSides