import React, { useContext, useCallback, useMemo } from 'react'
import { BuilderContext } from '../../../../../context/BuilderContext'
import NumberInput from '../../../../../components/NumberInput'

const IndividualCorners = React.memo(() => {
    const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)
 
    const sides = useMemo(() => [
        { id: 'borderRadiusTopLeft', label: 'Top Left' },
        { id: 'borderRadiusTopRight', label: 'Top Right' },
        { id: 'borderRadiusBottomLeft', label: 'Bottom Left' },
        { id: 'borderRadiusBottomRight', label: 'Bottom Right' }
    ], [])

    return (
        <>
            {sides.map(item => (
                <div key={item.id} className="mb-4 flex flex-wrap items-center justify-between">
                    <label className="text-gray-700">{item.label}</label>
                    <div className='flex items-center gap-2'>

                        <NumberInput max={30} min={0} step={1}
                            defaultValue={selectedRow?.styles[item.id]}
                            onChange={(value) => handleRowStyleChange(selectedRow.id, `${item.id}`, value)}
                        />


                    </div>
                </div>
            ))}
        </>
    )
})

export default IndividualCorners