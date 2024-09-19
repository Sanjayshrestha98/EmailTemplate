import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import React, { useState } from 'react';

function DragAndDrop() {
    const [items, setItems] = useState([
        { id: 101, name: 'Item 1', list: 'A' },
        { id: 201, name: 'Item 2', list: 'A' },
        { id: 301, name: 'Item 3', list: 'B' },
        { id: 401, name: 'Item 4', list: 'B' },
    ]);

    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredList, setHoveredList] = useState(null);

    // Handle drag start
    const handleDragStart = (e, item) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
    };

    // Handle drag over
    const handleDragOver = (e, list, index = null) => {
        e.preventDefault(); // Necessary to allow drop
        setHoveredList(list);
    };

    // Handle drop
    const handleDrop = (e, list) => {
        e.preventDefault();

        if (!draggedItem) return;

        let newItems = [...items];
        // Remove the dragged item from the original position
        newItems = newItems.filter((i) => i.id !== draggedItem.id);

        // Determine the new index position
        const filteredItems = newItems.filter((i) => i.list === list);
        const insertIndex =
            hoveredIndex !== null && hoveredIndex <= filteredItems.length
                ? hoveredIndex
                : filteredItems.length;

        // Insert the dragged item into the new position
        newItems.splice(insertIndex, 0, { ...draggedItem, list });

        // Reset the state
        setItems(newItems);
        setDraggedItem(null);
        setHoveredIndex(null);
        setHoveredList(null);
    };

    console.log('hoveredList', hoveredList)
    console.log('hoveredIndex', hoveredIndex)
    console.log('draggedItem', draggedItem)
    
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };

    const { attributes, listeners, transform } = useDraggable({
        id: 'draggable',
    });
    const style1 = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <div ref={setNodeRef} style={style1}>
            Draggable
        </div>
    );


    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }
    return (
        // <div className="flex justify-around mt-12">
        //     {['A', 'B'].map((list) => (
        //         <div
        //             key={list}
        //             className="border w-48 min-h-[300px] p-4 bg-gray-100"
        //             onDragOver={(e) => handleDragOver(e, list)}
        //             onDrop={(e) => handleDrop(e, list)}
        //         >
        //             <h3 className="font-bold mb-4">List {list}</h3>
        //             {items
        //                 .filter((item) => item.list === list)
        //                 .map((item, index) => (
        //                     <div key={item.id} className="relative" onDragOver={() => setHoveredIndex(index)}>
        //                         {/* Show the placeholder */}
        //                         {hoveredIndex === index && (
        //                             <div className="bg-blue-100 border-2 border-dashed border-blue-500 text-center text-blue-500">
        //                                 Drop Here
        //                             </div>
        //                         )} 
        //                         <div
        //                             className="mb-2 p-2 bg-gray-200 border cursor-grab"
        //                             draggable
        //                             onDragStart={(e) => handleDragStart(e, item)}
        //                             onDragOver={(e) => handleDragOver(e, list, index)}
        //                         >
        //                             {item.name}
        //                         </div>
        //                     </div>
        //                 ))}
        //             {/* Show placeholder at the end of the list */}
        //             {/* {hoveredList === list && hoveredIndex === null && (
        //     <div className="h-8 mb-2 p-2 bg-blue-100 border-2 border-dashed border-blue-500 text-center text-blue-500">
        //       Drop Here
        //     </div>
        //   )} */}
        //         </div>
        //     ))}
        // </div>
        <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? draggableMarkup : null}


            <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {isDropped ? draggableMarkup : 'Drop here'}
                Hello Buddy
            </button>

        </DndContext>
    );
}

export default DragAndDrop;
