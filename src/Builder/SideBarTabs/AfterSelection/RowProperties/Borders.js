import React, { useCallback, useContext, useState } from 'react'
import ColorPicker from '../../../../components/ColorPicker';
import { BuilderContext } from '../../../../context/BuilderContext';
import _ from 'lodash';
import NumberInput from '../../../../components/NumberInput';

function Borders() {

  const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

  const [showAdvanced, setShowAllSides] = useState(false);

  const debouncedSetInput = useCallback(
    _.debounce((payload, type) => {
      if (selectedRow) {
        handleRowStyleChange(selectedRow.id, type, payload)
        console.log(payload, type)
      }
    }, 500), // 500ms debounce delay
    [selectedRow]
  );

  console.log('selectedRow', selectedRow.styles)

  const handleAllSidesWidth = (payload) => {
    handleRowStyleChange(selectedRow.id, 'borderLeft.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderRight.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderTop.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderBottom.width', payload)
  }

  const handleAllSidesType = (payload) => {
    handleRowStyleChange(selectedRow.id, 'borderLeft.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderRight.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderTop.width', payload)
    handleRowStyleChange(selectedRow.id, 'borderBottom.width', payload)
  }

  return (
    <div className="p-2 rounded-md text-xs ">
      {/* Background Color */}
      <div className="mb-4 flex items-center justify-between">
        <label className=" text-gray-700">Border</label>
        <div className='flex items-center gap-2 '>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" onChange={(e) => setShowAllSides(e.target.checked)} class="sr-only peer" />
            <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
          </label>
        </div>
      </div>

      {
        showAdvanced ?
          <div className="mb-4 flex items-center justify-between">
            <label className=" text-gray-700">a</label>
            <div className='flex items-center gap-2 '>

            </div>
          </div>
          :
          <div className="mb-4 flex flex-wrap items-center justify-between">
            <label className=" text-gray-700">All Sides</label>
            <div className='flex items-center gap-2 '>
              <select onChange={(e) => {
                debouncedSetInput(selectedRow.id, e.target.value, "borderType")
              }}
                className="text-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="none">None</option>
              </select>

              <NumberInput max={10} min={0} step={1} onChange={(value) =>
                // console.log('value', value)
                handleAllSidesWidth(value)
              }
              />

              <div className="flex items-center justify-between">
                <div className='flex items-center gap-2 '>
                  <ColorPicker color={selectedRow?.styles?.borderColor} handleChange={debouncedSetInput} fieldName="borderColor" />
                  <input
                    type="text"
                    value={selectedRow?.styles?.backgroundColor}
                    onChange={(e) =>
                      debouncedSetInput(selectedRow.id, e.target.value, "borderColor")
                    }
                    className="border p-2 rounded-md w-24"
                  />

                </div>
              </div>

            </div>
          </div>
      }




      {/* 
      {   
    
    "borderLeft": 0,
    "borderRight": 0,
    "borderTop": 0,
    "borderBottom": 0,
    "borderColor": "#000000",
    "borderType": "solid",
    "borderRadiusTopLeft": 0,
    "borderRadiusTopRight": 0,
    "borderRadiusBottomLeft": 0,
    "borderRadiusBottomRight": 0,
    "verticalAlign": "top",
    "cellSpacing": 0,
   
} */}



    </div>
  )
}

export default Borders