import React, { useEffect, useState, useRef } from "react";
import { GripVertical } from "lucide-react";
import { BuilderContext } from "../../../../context/BuilderContext";
import ColumnProperties from "../ColumnProperties/ColumnProperties";

const ColumnStructure = () => {
  const { selectedRow, handleColumnStyleChange, handleAddColumn } = React.useContext(BuilderContext);

  const [columns, setColumns] = useState([]);
  const [activeColumn, setActiveColumn] = useState(null);
  const isDragging = useRef(false);
  const dragIndex = useRef(null);
  const initialX = useRef(0);
  const initialSpans = useRef({ col1: 0, col2: 0 });

  useEffect(() => {
    setColumns(selectedRow?.columns || []);
  }, [selectedRow]);

  useEffect(() => {
    setActiveColumn(selectedRow?.columns?.[0] || null);
  }, []);
  const handleMouseDown = (e, index) => {
    isDragging.current = true;
    dragIndex.current = index;
    initialX.current = e.clientX;
    initialSpans.current = {
      col1: parseInt(selectedRow?.columns[index].span, 10),
      col2: parseInt(selectedRow?.columns[index + 1]?.span, 10),
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || dragIndex.current === null) return;

    const deltaX = e.clientX - initialX.current;
    const deltaSpan = Math.round(deltaX / 20); // Adjust sensitivity for dragging

    const col1Span = Math.max(1, Math.min(12, initialSpans.current.col1 + deltaSpan));
    const col2Span = Math.max(1, Math.min(12, initialSpans.current.col2 - deltaSpan));

    // Ensure total span remains constant
    if (col1Span + col2Span === initialSpans.current.col1 + initialSpans.current.col2) {
      const updatedColumns = [...columns];
      updatedColumns[dragIndex.current].span = col1Span.toString();
      updatedColumns[dragIndex.current + 1].span = col2Span.toString();
      setColumns(updatedColumns);
      handleColumnStyleChange(selectedRow.id, columns[dragIndex.current].id, 'span', col1Span);
      handleColumnStyleChange(selectedRow.id, columns[dragIndex.current + 1]?.id, 'span', col2Span);
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      dragIndex.current = null;
    }
  };

  useEffect(() => {
    if (isDragging.current) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="select-none bg-gray-100" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="pb-4 px-4">
        <div className="flex justify-end">
          <button onClick={() => handleAddColumn(selectedRow?.id)} className="mb-3">
            + Add New
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {columns?.map((col, index) => (
            <div className="w-full" key={col.id}>
              <div className="flex items-center">
                <div
                  onClick={() => {

                    setActiveColumn(null)
                    setTimeout(() => {
                      setActiveColumn(col);
                    }, 600);

                  }}
                  className={`cursor-pointer relative text-center border py-2 rounded-md ${activeColumn?.id === col.id ? "bg-blue-200" : "bg-white"
                    }`}
                  style={{
                    flexGrow: parseInt(col.span, 10), // Dynamically set width
                  }}
                >
                  {col.span}
                  {activeColumn?.id === col.id && (
                    <div className="absolute -bottom-6 rotate-45 left-1/2 -translate-x-1/2 h-[14px] w-[14px] bg-white"></div>
                  )}
                </div>
                {index < columns.length - 1 && (
                  <div
                    className="cursor-ew-resize h-full px-2 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded transition-all"
                    onMouseDown={(e) => handleMouseDown(e, index)}
                  >
                    <GripVertical size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeColumn ? <ColumnProperties rowid={selectedRow?.id} data={activeColumn} /> :
        <div className="p-4 text-center text-gray-500 h-[200px] flex items-center justify-center"> 
            Loading
        </div>
      }
    </div>
  );
};

export default ColumnStructure;
