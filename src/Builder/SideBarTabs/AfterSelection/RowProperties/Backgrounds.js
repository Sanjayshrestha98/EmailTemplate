import React, { useCallback, useContext } from 'react'
import ColorPicker from '../../../../components/ColorPicker';
import { BuilderContext } from '../../../../context/BuilderContext';
import _ from 'lodash';

function Backgrounds() {

  const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

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


  return (
    <div className="p-2 rounded-md text-xs ">
      {/* Background Color */}
      <div className="mb-4 flex items-center justify-between">
        <label className=" text-gray-700">Background color</label>
        <div className='flex items-center gap-2 '>
          <ColorPicker color={selectedRow?.styles?.backgroundColor} handleChange={debouncedSetInput} fieldName="backgroundColor" />
          <input
            type="text"
            value={selectedRow?.styles?.backgroundColor}
            onChange={(e) =>
              debouncedSetInput(selectedRow.id, e.target.value, "backgroundColor")
            }
            className="border p-2 rounded-md w-24"
          />

        </div>
      </div>

      {/* Content Area Background Color */}
      <div className="mb-4 flex items-center justify-between">
        <label className=" text-gray-700">Content area background color</label>
        <div className='flex items-center gap-2'>

          <ColorPicker color={selectedRow?.styles?.contentAreaBackgroundColor} handleChange={debouncedSetInput} fieldName="contentAreaBackgroundColor" />

          <input
            type="text"
            value={selectedRow?.styles?.contentAreaBackgroundColor}
            onChange={(e) => {
              handleRowStyleChange(selectedRow.id, "contentAreaBackgroundColor", e.target.value)
            }}
            className="border p-2 rounded-md w-24"
          />
          {/* <span>{selectedRow?.styles?.contentAreaBackgroundColor}</span> */}

        </div>
      </div>

      {/* Background Image Toggle */}
      <div className="flex items-center justify-between mb-4">
        <label className=" text-gray-700">Background image</label>
        <input
          type="checkbox"
          checked={selectedRow?.styles?.hasBackgroundImage}
          onChange={(e) => handleRowStyleChange(selectedRow.id, 'hasBackgroundImage', e.target.checked)}
          className="h-5 w-5 text-blue-500"
        />
      </div>
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


      {/* Choose Image Button and URL Input */}
      {selectedRow?.styles?.hasBackgroundImage && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className=" text-gray-700">Apply Image To</label>

            <div className='flex items-center gap-2'>
              <button className={`${selectedRow?.styles?.applyImageTo === 'row' ? 'bg-blue-500 text-white' : ''} border border-gray-300 rounded px-3 py-2`} onClick={() => handleRowStyleChange(selectedRow.id, 'applyImageTo', 'row')}>Row</button>
              <button className={`${selectedRow?.styles?.applyImageTo === 'cell' ? 'bg-blue-500 text-white' : ''} border border-gray-300 rounded px-3 py-2`} onClick={() => handleRowStyleChange(selectedRow.id, 'applyImageTo', 'cell')}>Content Area</button>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white  py-2 rounded-md hover:bg-blue-600">
            Choose image
          </button>
          <input
            onKeyDown={(e) => {
              // Handle keydown for enter key
              if (e.key === 'Enter') {
                handleRowStyleChange(selectedRow.id, 'url', e.target.value);
              }
            }}
            type="text"
            placeholder="Url"
            defaultValue={selectedRow?.styles?.url}
            onBlur={(e) => handleRowStyleChange(selectedRow.id, 'url', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 "
          />
        </div>
      )}

      {/* Fit to Background, Repeat, Center Options */}
      {selectedRow?.styles?.hasBackgroundImage && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedRow?.styles?.backgroundFit}
                onChange={(e) => {
                  handleRowStyleChange(selectedRow.id, "backgroundFit", e.target.checked)
                }}
                className="h-4 w-4 text-blue-500"
              />
              <label className=" text-gray-700">Fit to background</label>
            </div>

            <div className="flex items-center space-x-2">
              <label className=" text-gray-700">Repeat</label>
              <input
                disabled={selectedRow?.styles?.backgroundFit}
                type="checkbox"
                checked={selectedRow?.styles?.backgroundRepeat}
                onChange={(e) => handleRowStyleChange(selectedRow.id, 'backgroundRepeat', e.target.checked)}
                className="h-4 w-4 text-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label className=" text-gray-700">Center</label>
              <input
                type="checkbox"
                disabled={selectedRow?.styles?.backgroundFit}
                checked={selectedRow?.styles?.backgroundCenter}
                onChange={(e) => handleRowStyleChange(selectedRow.id, 'backgroundCenter', e.target.checked)}
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
    </div>
  )
}

export default Backgrounds