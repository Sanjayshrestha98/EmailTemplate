import React, { useContext, useEffect } from 'react'
import ParagraphElem from './Elements/ParagraphElem';
import { BuilderContext } from '../context/BuilderContext';
import { mouseOver } from '../utils/HoverToggle/MouseOver';
import { mouseLeave } from '../utils/HoverToggle/MouseLeave';

function SingleNode({ data, width, rowid }) {

    const { rootState, selectedNode, setSelectedRow, setSelectedNode, setSelectedTab } = useContext(BuilderContext)

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
        <div
            onMouseOver={(e) => {
                mouseOver(e, rowid)
            }}
            onMouseLeave={(e) => {
                mouseLeave(e, rowid)
            }}
            id={data?.id}
            onClick={(e) => {
                e.stopPropagation();
                setSelectedRow(null)
                setSelectedNode(data)
                setSelectedTab('content')
            }}
            valign='top' className={`${selectedNode && selectedNode?.id === data?.id ? 'outline' : ''} group relative hover:outline-2   outline-blue-600 -outline-offset-2 pointer-events-auto`} style={{
                ...styles,
                // backgroundColor: rootState?.contentAreaBackgroundColor,
                width: width
            }}>

            <div className='absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2 group-hover:block hidden text-white capitalize'>{data?.type}</div>

            {renderElement(data?.type)}
        </div>
    )
}

export default SingleNode