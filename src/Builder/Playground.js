
import React, { useEffect } from 'react'
import Rows from './Rows'

function Playground(props) {

    return (
        <div className='w-full transition-all duration-300 ease-in-out '>

            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="nl-container" role="presentation">
                <tbody>
                    <Rows />
                </tbody>
            </table>
            {/* <DragAndDrop /> */}
        </div>
    )
}

export default Playground