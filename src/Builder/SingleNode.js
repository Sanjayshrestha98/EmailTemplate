import React, { useEffect } from 'react'
import ParagraphElem from './Elements/ParagraphElem';

function SingleNode({ data }) {



    const renderElement = (type) => {
        switch (type) {
            case 'paragraph':
                return <ParagraphElem data={data} />
            default:
                break;
        }

    }
    return (
        <td id='mp101-1' className='border bg-red-900 relative'  >

            {renderElement(data?.type)}

        </td>
    )
}

export default SingleNode