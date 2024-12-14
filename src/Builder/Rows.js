import React, { useContext, useReducer } from 'react'
import { BuilderContext } from '../context/BuilderContext';

import Columns from './Columns';
import { mouseOver } from '../utils/HoverToggle/MouseOver';
import { mouseLeave } from '../utils/HoverToggle/MouseLeave';
function Rows({ data }) {

  const { rootState, selectedRow, setSelectedRow, setSelectedTab, setSelectedNode } = useContext(BuilderContext)
  const calculateWidth = (span) => {
    return (rootState?.width / 12) * span; // Div width based on 12 columns
  };

  console.log('data', data)
  console.log('selectedRow', selectedRow)

  return (
    <tr
      id={data?.id}
      onMouseOver={(e) => {
        mouseOver(e, null, "group/row")
      }}
      onMouseLeave={(e) => {
        mouseLeave(e, null, "group/row")
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedNode(null)
        setSelectedRow(data)
        setSelectedTab("rows")
      }}
      className={`${selectedRow?.id === data?.id ? 'outline' : ''} group/row relative  outline-2 -outline-offset-2 outline-blue-700 `}>
      <div className='absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2 text-white group-hover/row:block hidden'>Row</div>
      {
        selectedRow?.id && selectedRow?.id === data?.id && <><div className='absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2 text-white  '>This is selected</div></>
      }

      <table align={rootState.alignment} border="0" cellPadding="0" cellSpacing="0" className="row-content"
        role="presentation"
        // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
        width={rootState.width}>
        <tbody>
          <tr>

            {
              data?.columns?.map((value) => {
                return (
                  <Columns key={value?.id} data={value} width={calculateWidth(value?.span)} rowid={data?.id} />
                )
              })
            }
          </tr>
        </tbody>
      </table>
    </tr>
  )
}

export default Rows