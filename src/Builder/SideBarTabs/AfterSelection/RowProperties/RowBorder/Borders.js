import React, { useCallback, useContext, useState } from 'react'
import { BuilderContext } from '../../../../../context/BuilderContext';
import _ from 'lodash';
import AllSides from './AllSides';
import IndividualSides from './IndividualSides';
import IndividualCorners from './IndividualCorners';
import AllCorners from './AllCorners';

function Borders() {

  const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

  const [showAllBorderSides, setShowAllBorderSides] = useState(selectedRow?.styles?.advancedBorder);
  const [showAllRadiusSides, setShowAllRadiusSides] = useState(selectedRow?.styles?.advancedRadius);

  const handleAllSidesBorderChange = useCallback(() => {
    const sides = ['borderRight', 'borderTop', 'borderBottom']
    sides.forEach(side => {
      handleRowStyleChange(selectedRow.id, `${side}.width`, selectedRow.styles.borderLeft.width)
      handleRowStyleChange(selectedRow.id, `${side}.color`, selectedRow.styles.borderLeft.color)
      handleRowStyleChange(selectedRow.id, `${side}.type`, selectedRow.styles.borderLeft.type)
    })
  }, [selectedRow.id, selectedRow.styles.borderLeft.color, selectedRow.styles.borderLeft.type, selectedRow.styles.borderLeft.width, handleRowStyleChange])

  const handleAllSidesRadiusChange = useCallback(() => {
    const sides = ['borderRadiusTopRight', 'borderRadiusBottomLeft', 'borderRadiusBottomRight']
    sides.forEach(side => {
      handleRowStyleChange(selectedRow.id, `${side}`, selectedRow.styles.borderRadiusTopLeft)
    })
  }, [selectedRow.id, selectedRow.borderRadiusTopRight, selectedRow.borderRadiusBottomLeft, selectedRow.borderRadiusBottomRight, handleRowStyleChange])

  return (
    <div className="p-2 rounded-md text-xs ">
      {/* Background Color */}
      <div className="mb-4 flex items-center justify-between">
        <label className=" text-gray-700">Border</label>
        <div className='flex items-center gap-2 '>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={showAllBorderSides} onChange={(e) => {
              handleRowStyleChange(selectedRow.id, 'advancedBorder', e.target.checked)
              setShowAllBorderSides(e.target.checked)

              if (!e.target.checked) {
                handleAllSidesBorderChange()
              }
            }} class="sr-only peer" />
            <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
          </label>
        </div>
      </div>

      {
        showAllBorderSides ?
          <IndividualSides />
          :
          <AllSides />
      }

      <hr />

      <div className="my-4 flex items-center justify-between">
        <label className=" text-gray-700">Rounded Corners</label>
        <div className='flex items-center gap-2 '>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={showAllRadiusSides} onChange={(e) => {
              handleRowStyleChange(selectedRow.id, 'advancedRadius', e.target.checked)
              setShowAllRadiusSides(e.target.checked)

              if (!e.target.checked) {
                handleAllSidesRadiusChange()
              }

            }} class="sr-only peer" />
            <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
          </label>
        </div>
      </div>

      {
        showAllRadiusSides ?
          <IndividualCorners />
          :
          <AllCorners />
      }


   



    </div>
  )
}

export default Borders