import React, { useState } from 'react'
import Playground from './Playground'
import SideControls from './SideControls'
import { DndContext } from '@dnd-kit/core'
import { BuilderProvider } from '../context/BuilderContext'

function TemplateBuilder() {

    const [builderData, setBuilderData] = useState({});

    const [activeId, setActiveId] = useState(null);

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {

        console.log('active', event.active)
        console.log('over', event.over)
        setActiveId(null);
    }
    return (
        <div className='flex w-full flex-col h-full min-h-screen'>
            <div className='flex w-full py-2 px-4 sticky h-12 z-10 top-0 bg-white border-b'>
                <button className='mx-4 border text-sm p-1'>Back</button>
            </div>
            <div className='flex flex-1 w-full h-full'>
                <BuilderProvider>
                    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} >
                        {/* Droppable */}
                        <Playground />

                        {/* Draggable */}
                        <SideControls />
                    </DndContext>
                </BuilderProvider>
            </div>
        </div >
    )
}

export default TemplateBuilder