
import React from 'react'
import Rows from './Rows'

function Playground(props) {
 
    const data = [
        {
            rowid: 1,
            content: [{
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
            }]
        },
        {
            rowid: 2,
            content: [{
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
            }]
        }
    ]

    return (
        <div className='w-full transition-all duration-300 ease-in-out '>

            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="nl-container" role="presentation">
                <tbody>
                    {
                        data.map((value, index) => {
                            return <Rows key={value.rowid} data={value} />
                        })
                    }
                    <Rows />
                </tbody>
            </table>

            {/* <DragAndDrop /> */}

        </div>
    )
}

export default Playground