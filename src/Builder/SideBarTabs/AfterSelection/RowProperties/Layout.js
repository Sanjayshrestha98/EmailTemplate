import React, { useCallback, useContext } from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'
import { AlignCenterHorizontal, AlignEndHorizontal, AlignStartHorizontal } from 'lucide-react'

function Layout() {

  const { selectedRow, handleRowStyleChange } = useContext(BuilderContext)

  const handleVerticalAlign = useCallback((value) => {
    handleRowStyleChange(selectedRow.id, 'verticalAlign', value)
  }, [selectedRow.id, handleRowStyleChange])


  return (
    <div className='text-xs p-2'>
      <div className='flex justify-between items-center'>
        <span>Vertical Align</span>

        <div className='border border-gray-300 rounded-md overflow-hidden  divide-x'>
          <button onClick={() => {
            handleVerticalAlign('top')
          }} className={`p-2  ${selectedRow.styles.verticalAlign === 'top' ? "bg-blue-400" : "bg-white hover:bg-gray-100 "}`} title='Top'>
            <AlignStartHorizontal size={18} fill={selectedRow.styles.verticalAlign === 'top' ? 'white' : 'gray'} color={selectedRow.styles.verticalAlign === 'top' ? 'white' : 'gray'} />
          </button>
          <button onClick={() => {
            handleVerticalAlign('middle')
          }} className={`p-2 ${selectedRow.styles.verticalAlign === 'middle' ? "bg-blue-400" : "bg-white hover:bg-gray-100"}`} title='Middle'>
            <AlignCenterHorizontal size={18} fill={selectedRow.styles.verticalAlign === 'middle' ? 'white' : 'gray'} color={selectedRow.styles.verticalAlign === 'middle' ? 'white' : 'gray'}  />

          </button>
          <button onClick={() => {
            handleVerticalAlign('bottom')
          }} className={`p-2 ${selectedRow.styles.verticalAlign === 'bottom' ? "bg-blue-400" : "bg-white hover:bg-gray-100"}`} title='Bottom'>
            <AlignEndHorizontal size={18} fill={selectedRow.styles.verticalAlign === 'bottom' ? 'white' : 'gray'} color={selectedRow.styles.verticalAlign === 'bottom' ? 'white' : 'gray'}  />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Layout