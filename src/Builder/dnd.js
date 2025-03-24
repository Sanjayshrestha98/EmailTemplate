import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function App() {
  const [itemsList1, setItemsList1] = useState(["Item 1", "Item 2", "Item 3"]);
  const [itemsList2, setItemsList2] = useState(["Item A", "Item B", "Item C"]);

  // Handle the drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    // Only proceed if the item is dropped in a droppable area
    if (over) {
      if (over.id === "list1") {
        setItemsList1((items) => [...items, active.id]);
        setItemsList2((items) => items.filter((item) => item !== active.id));
      } else if (over.id === "list2") {
        setItemsList2((items) => [...items, active.id]);
        setItemsList1((items) => items.filter((item) => item !== active.id));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* List 1 */}
        <Droppable id="list1">
          {itemsList1.map((item) => (
            <div key={item} id={item}>
              {item}
            </div>
          ))}
        </Droppable>

        {/* List 2 */}
        <div id="list2">
          {itemsList2.map((item) => (
            <Draggable key={item} id={item}>
              {item}
            </Draggable>
          ))}
        </div>
      </div>
    </DndContext>
  );
}

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        padding: "8px 16px",
        margin: "4px",
        backgroundColor: "#ddd",
        borderRadius: "4px",
        cursor: "grab",
      }}
    >
      {children}
    </div>
  );
}

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        minHeight: "200px",
        width: "200px",
        padding: "16px",
        border: "2px dashed #ccc",
        backgroundColor: isOver ? "#f0f0f0" : "#fff",
      }}
    >
      <h3>{id}</h3>
      {children}
    </div>
  );
}

export default App;
