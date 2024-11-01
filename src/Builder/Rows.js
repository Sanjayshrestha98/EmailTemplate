import React, { useContext, useReducer } from 'react'
import { BuilderContext } from '../context/BuilderContext';

import SingleNode from './SingleNode'
function Rows({ data }) {

  const { rootState } = useContext(BuilderContext)

  console.log('backgroundColor', rootState?.backgroundColor)
  return (
    <tr id='mp101' background={rootState?.backgroundColor} style={{
      backgroundColor: rootState?.backgroundColor
    }} className={`border relative hover:border-blue-600 border-transparent`}>
      <table align={rootState.alignment} border="0" cellpadding="0" cellspacing="0" class="row-content"
        role="presentation"
        // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
        width={rootState.width}>
        <tbody>
          <tr>
            {
              data?.content?.map((value, index) => {
                return <SingleNode data={value} />
              })
            }
          </tr>
        </tbody>
      </table>
    </tr>
  )
}

export default Rows