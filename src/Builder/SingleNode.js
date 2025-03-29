import React, { useContext, useEffect } from 'react'
import ParagraphElem from './Elements/ParagraphElem';
import { BuilderContext } from '../context/BuilderContext';
import { mouseOver } from '../utils/HoverToggle/MouseOver';
import { mouseLeave } from '../utils/HoverToggle/MouseLeave';
import TitleElem from './Elements/TitleElem';
import { Trash } from 'lucide-react';

function SingleNode({ data, width, rowid, columnid }) {

    const { rootState, selectedNode, setSelectedRow, setSelectedNode, setSelectedTab, deleteItemFromColumn, handleContentChange } = useContext(BuilderContext)

    const styles = {
        padding: `${data?.styles?.padding}px`,
    }

    const renderElement = (type) => {
        switch (type) {
            case 'paragraph':
                return <ParagraphElem data={data} rowId={rowid} columnId={columnid} itemId={data?.id} handleContentChange={handleContentChange} />
            case 'title':
                return <TitleElem data={data} rowId={rowid} columnId={columnid} itemId={data?.id} handleContentChange={handleContentChange} />
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

            <div className={`absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2  text-white capitalize ${selectedNode && selectedNode?.id === data?.id ? ' hidden' : 'group-hover:block hidden'}`}>{data?.type}</div>
            <div className='absolute bottom-full text-xs bg-blue-600 flex gap-2 right-0 w-fit px-2 text-white capitalize'>{selectedNode && selectedNode?.id === data?.id ?
                <>
                    <button className='text-white' onClick={() => {
                        deleteItemFromColumn(rowid, columnid, data?.id)
                    }}>
                        <Trash size={16} />
                    </button>
                    <button className='text-white' onClick={() => {
                        deleteItemFromColumn(rowid, columnid, data?.id)
                    }}>
                        <Trash size={16} />
                    </button>
                </>
                : ''}</div>

            {renderElement(data?.type)}
        </div>
    )
}

export default SingleNode