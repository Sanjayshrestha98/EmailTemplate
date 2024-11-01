import React, { useState } from 'react'
import Playground from './Playground'
import SideControls from './SideControls'
import { DndContext } from '@dnd-kit/core'
import { BuilderProvider } from '../context/BuilderContext'

function TemplateBuilder() {

    const [builderData, setBuilderData] = useState({});

    return (
        <div className='flex w-full flex-col h-full min-h-screen'>
            <div className='flex w-full py-2 px-4   bg-white border-b'>
                <button className='mx-4 border text-sm p-1'>Back</button>
            </div>
            <div className='flex flex-1 w-full h-full'>
                <BuilderProvider>
                    <DndContext >
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