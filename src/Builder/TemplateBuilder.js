import React, { useContext, useState } from 'react'
import Playground from './Playground'
import SideControls from './SideControls'
import { DndContext } from '@dnd-kit/core'
import { BuilderContext } from '../context/BuilderContext'

function TemplateBuilder() {

    const [activeId, setActiveId] = useState(null);

    const { addItemsToColumn } = useContext(BuilderContext);

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        
        addItemsToColumn(over?.data?.current?.rowid, over?.id, active?.data?.current?.type);

        const activeData = active?.data?.current; 
 
        const overId = over?.id;

        console.log('activeData', activeData)
        console.log('overID', overId) 

        console.log('active', event?.active)
        console.log('over', event?.over)
        setActiveId(null);
 

    }
    return (
        <div className='flex w-full flex-col h-full min-h-screen'>
            <div className='flex w-full py-2 px-4 sticky h-12 z-10 top-0 bg-white border-b'>
                <button className='mx-4 border text-sm p-1'>Back</button>
            </div>
            <div className='flex flex-1 w-full h-full'>
                    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                        {/* Droppable */}
                        <Playground />

                        {/* Draggable */}
                        <SideControls />
                    </DndContext>
            </div>
        </div >
    )
}

export default TemplateBuilder