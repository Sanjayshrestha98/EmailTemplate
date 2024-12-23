import React, { useContext, useCallback, useMemo } from 'react'
import { BuilderContext } from '../../../../../context/BuilderContext'
import ColorPicker from '../../../../../components/ColorPicker'
import NumberInput from '../../../../../components/NumberInput'

const IndividualSides = React.memo(() => {
    const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

    const handleSingleSideColor = useCallback((color, fieldName) => {
        handleRowStyleChange(selectedRow.id, fieldName, color)
    }, [selectedRow.id, handleRowStyleChange])

    const sides = useMemo(() => [
        { id: 'borderLeft', label: 'Left' },
        { id: 'borderRight', label: 'Right' },
        { id: 'borderTop', label: 'Top' },
        { id: 'borderBottom', label: 'Bottom' }
    ], [])

    return (
        <>
            {sides.map(item => (
                <div key={item.id} className="mb-4 flex flex-wrap items-center justify-between">
                    <label className="text-gray-700">{item.label}</label>
                    <div className='flex items-center gap-2'>
                        <select
                            defaultValue={selectedRow?.styles[item.id]?.type}
                            onChange={(e) => handleRowStyleChange(selectedRow.id, `${item.id}.type`, e.target.value)}
                            className="text-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                            <option value="none">None</option>
                            <option value="solid">Solid</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                        </select>

                        <NumberInput max={10} min={0} step={1}
                            defaultValue={selectedRow?.styles[item.id]?.width}
                            onChange={(value) => handleRowStyleChange(selectedRow.id, `${item.id}.width`, value)}
                        />

                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-2'>
                                <ColorPicker color={selectedRow?.styles[item.id]?.color} handleChange={handleSingleSideColor} fieldName={`${item.id}.color`} />
                                <input
                                    type="text"
                                    value={selectedRow?.styles[item.id]?.color}
                                    onChange={(e) => handleRowStyleChange(selectedRow.id, `${item.id}.color`, e.target.value)}
                                    className="border p-2 rounded-md w-24"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
})

export default IndividualSides