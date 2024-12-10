import React, { useContext, useReducer } from 'react'
import { BuilderContext } from '../context/BuilderContext';

import Columns from './Columns';
function Rows({ data }) {

  const { rootState } = useContext(BuilderContext)
  const calculateWidth = (span) => {
    return (rootState?.width / 12) * span; // Div width based on 12 columns
  };

  return (
    <tr id='mp101' className={` relative hover:outline outline-2 `}>
      <table align={rootState.alignment} border="0" cellPadding="0" cellSpacing="0" className="row-content"
        role="presentation"
        // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
        width={rootState.width}>
        <tbody>
          <tr>
            {
              data?.columns?.map((value) => {
                return (
                  <Columns key={value?.id} data={value} width={calculateWidth(value?.span)} />
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