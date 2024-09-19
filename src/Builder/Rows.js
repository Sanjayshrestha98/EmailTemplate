import React, { useContext, useEffect } from 'react'
import { BuilderContext } from '../context/BuilderContext';

import SingleNode from './SingleNode'
function Rows() {
  const { contentWidth } = useContext(BuilderContext)

  console.log('contentWidth', contentWidth)
  const data = [
    {
      id: 1,
      type: 'paragraph',
      content: `
          <p>
            This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
          </p>
          <p>
            The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
          </p>
        `
    },
    {
      id: 2,
      type: 'paragraph',
      content: `
          <p>
            This is another radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
          </p>
          <p>
            The asdasdasd asd asd asd as really requird asd asdyou need atasdasd node. Sure, that node can be something different.
          </p>
        `
    }
  ]


  return (
    <tr id='mp101' className='bg-blue-100/20 border relative  hover:border-blue-600'>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
        role="presentation"
        // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
        width={contentWidth}>
        <tbody>
          <tr>
            {
              data.map((value, index) => {
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