import React, { useCallback, useContext } from 'react'
import { BuilderContext } from '../../../../../context/BuilderContext'
import NumberInput from '../../../../../components/NumberInput';

function AllCorners() {

    const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

    const handleAllSidesChange = useCallback((value) => {
        const sides = ['borderRadiusTopLeft', 'borderRadiusTopRight', 'borderRadiusBottomLeft', 'borderRadiusBottomRight']
        sides.forEach(side => handleRowStyleChange(selectedRow.id, `${side}`, value))
    }, [selectedRow.id, handleRowStyleChange])

    return (
        <div className="mb-4 flex flex-wrap items-center justify-between">
            <label className=" text-gray-700">All Corners</label>
            <div className='flex items-center gap-2 '>

                <NumberInput max={30} min={0} step={1}
                    defaultValue={selectedRow?.styles?.borderRadiusTopLeft}
                    onChange={(value) =>
                        handleAllSidesChange(value)
                    }
                />

            </div>
        </div>
    )
}

export default AllCorners