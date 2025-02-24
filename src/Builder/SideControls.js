import React, { useContext, useState } from 'react'
import RowsSelector from './SideBarTabs/RowsSelector';
import { DragOverlay, useDraggable } from '@dnd-kit/core';
import Settings from './SideBarTabs/Settings';
import { BuilderContext } from '../context/BuilderContext';

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
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

  const { rootState, selectedTab, setSelectedTab, setSelectedRow, setSelectedNode } = useContext(BuilderContext)

  const items = [
    { label: 'TITLE', icon: 'T', id: "1" },
    { label: 'PARAGRAPH', icon: 'P', id: "2" },
    { label: 'IMAGE', icon: 'I', id: "3" },
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

  return (
    <div
      style={{
        scrollbarWidth: "thin",
        // scrollbarGutter: "stable ="
      }}
      className='w-2/5 overscroll-contain border border-collapse max-h-screen sticky top-12 overflow-y-auto h-[calc(100vh-3rem)]'>
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
          <div className="grid grid-cols-3 p-4 gap-4">

            {items.map((item, index) => (
              <Draggable id={item.id} key={item.id} >
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="text-2xl font-bold mb-2">{item.icon}</div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              </Draggable>
            ))}

          </div>
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