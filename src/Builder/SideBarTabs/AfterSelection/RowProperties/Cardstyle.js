import React from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'
import NumberInput from '../../../../components/NumberInput'


function Cardstyle() {

  const { selectedRow, handleRowStyleChange } = React.useContext(BuilderContext)

  {/* 
    "cellSpacing": 0,
*/}

  return (
    <div className='p-2'>
      <div className="flex flex-wrap items-center justify-between">
        <label className="text-gray-700">Spacing</label>
        <div className='flex items-center gap-2'>

          <NumberInput max={30} min={0} step={1}
            defaultValue={selectedRow?.styles?.cellSpacing}
            onChange={(value) => handleRowStyleChange(selectedRow.id, `cellSpacing`, value)}
          />

        </div>
      </div>
    </div>
  )
}

export default Cardstyle