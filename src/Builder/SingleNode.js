import React, { useContext, useEffect } from 'react'
import ParagraphElem from './Elements/ParagraphElem';
import { BuilderContext } from '../context/BuilderContext';

function SingleNode({ data, width }) {

    console.log("SingleNode1 data", data)
    const { rootState } = useContext(BuilderContext)
    const styles = {
        padding: `${data?.styles?.padding}px`,
    }

    const renderElement = (type) => {
        switch (type) {
            case 'paragraph':
                return <ParagraphElem data={data} />
            default:
                break;
        }

    }
    return (
        <div id='mp101-1-1' valign='top' className='border border-red-700 relative' style={{
            ...styles,
            backgroundColor: rootState?.contentAreaBackgroundColor,
            width: width
        }}>

            {renderElement(data?.type)}

        </div>
    )
}

export default SingleNode