import React, { useContext, useState } from 'react'
import RowsSelector from './SideBarTabs/RowsSelector';
import { DragOverlay, useDraggable } from '@dnd-kit/core';
import Settings from './SideBarTabs/Settings';
import { BuilderContext } from '../context/BuilderContext';
import { v1 as uuidv1 } from 'uuid';
import SingleElementProperties from './SideBarTabs/AfterSelection/SingleNodeProperties/SingleElementProperties';

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 9999999
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}

function SideControls(props) {

  const { rootState, selectedTab, selectedNode, setSelectedTab, setSelectedRow, selectedRow, setSelectedNode } = useContext(BuilderContext)

  const items = [
    {
      label: 'TITLE',
      icon: 'T',
      id: "1",
      type: 'title',
    },
    { label: 'PARAGRAPH', icon: 'P', id: "2", type: 'paragraph' },
    { label: 'IMAGE', icon: 'I', id: "3", type: 'image' },
    // { label: 'LIST', icon: 'L' },
    // { label: 'BUTTON', icon: 'B' },
    // { label: 'TABLE', icon: 'T' },
    // { label: 'DIVIDER', icon: 'D' },
    // { label: 'SPACER', icon: 'S' },
    // { label: 'SOCIAL', icon: 'S' },
    // { label: 'HTML', icon: '</>' },
    // { label: 'VIDEO', icon: 'V' },
    // { label: 'ICONS', icon: '*' },
    // { label: 'MENU', icon: 'M' },
    // { label: 'STICKER', icon: 'S' },
    // { label: 'GIF', icon: 'G' },
  ];


  const tabs = ['content', 'rows', 'settings'];

  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: 'draggable',
  // });
  
  const [isDragging, setIsDragging] = useState(false);
  const [activeId, setActiveId] = useState(null);
  
  console.log('selectedNode', selectedNode)
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd() {
    setActiveId(null);
  }

  return (
    <div
      style={{
        scrollbarWidth: "thin",
        // scrollbarGutter: "stable ="
      }}
      className='w-2/5 border border-collapse max-h-screen sticky top-12 h-[calc(100vh-3rem)]'>
      <div className="flex border-b sticky top-0 bg-white z-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium capitalize focus:outline-none ${selectedTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'
              }`}
            onClick={() => {
              setSelectedRow(null)
              setSelectedNode(null)
              setSelectedTab(tab)
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className=" ">
        {selectedTab === 'content' && (
          <>
            {selectedNode ? (
              <SingleElementProperties />
            ) :
              <div className="grid grid-cols-3 p-4 gap-4">

                {items.map((item, index) => (
                  <Draggable id={item.id} key={item.id} data={item} >
                    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="text-2xl font-bold mb-2">{item.icon}</div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  </Draggable>
                ))}

                <DragOverlay>
                  {activeId ? (
                    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="text-2xl font-bold mb-2">`Item ${activeId}`</div>
                      {/* <div className="text-sm font-medium">{item.label}</div> */}
                    </div>
                  ) : null}
                </DragOverlay>

              </div>
            }

          </>
        )}
        {selectedTab === 'rows' && (
          <RowsSelector />
        )}
        {selectedTab === 'settings' && (
          <Settings />
        )}

      </div>
    </div>
  )
}

export default SideControls