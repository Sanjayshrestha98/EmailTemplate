import React, { useEffect, useState } from "react";
import { GripVertical } from "lucide-react";
import { BuilderContext } from "../../../../context/BuilderContext";
import ColumnProperties from "../ColumnProperties/ColumnProperties";

const ColumnStructure = () => {
  const { selectedRow, handleColumnStyleChange, handleAddColumn } = React.useContext(BuilderContext);

  const [columns, setColumns] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialSpans, setInitialSpans] = useState({});

  useEffect(() => {
    setColumns(selectedRow?.columns || []);
    setActiveColumn(selectedRow?.columns?.[0] || null);
  }, [selectedRow]);

  const handleMouseDown = (e, index) => {
    setIsDragging(true);
    setDragIndex(index);
    setInitialX(e.clientX);
    setInitialSpans({
      col1: parseInt(columns[index].span, 10),
      col2: parseInt(columns[index + 1].span, 10),
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragIndex === null) return;

    const deltaX = e.clientX - initialX;
    const deltaSpan = Math.round(deltaX / 20); // Adjust sensitivity for dragging
    const col1Span = Math.max(1, Math.min(12, initialSpans.col1 + deltaSpan));
    const col2Span = Math.max(1, Math.min(12, initialSpans.col2 - deltaSpan));

    // Ensure total span remains constant
    if (col1Span + col2Span === initialSpans.col1 + initialSpans.col2) {
      const updatedColumns = [...columns];
      updatedColumns[dragIndex].span = col1Span.toString();
      updatedColumns[dragIndex + 1].span = col2Span.toString();
      setColumns(updatedColumns);
      handleColumnStyleChange(selectedRow.id, columns[dragIndex].id, 'span', col1Span);
      handleColumnStyleChange(selectedRow.id, columns[dragIndex + 1].id, 'span', col2Span);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragIndex(null);
    }
  };

  console.log('columns', columns)

  return (
    <div
      className="select-none bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="pb-4 px-4">
        <div className="flex justify-end">
          <button
            onClick={() => handleAddColumn(selectedRow?.id)}
            className="mb-3"
          >
            + Add New
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {columns.map((col, index) => (
            <React.Fragment key={col.id}>
              <div
                onClick={() => setActiveColumn(col)}
                className={`cursor-pointer relative text-center border py-2 rounded-md ${
                  activeColumn?.id === col.id ? "bg-blue-200" : "bg-white"
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
                  className="cursor-e-resize h-full"
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  style={{
                    padding: "0 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GripVertical size={14} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {activeColumn && <ColumnProperties rowid={selectedRow?.id} data={activeColumn} />}
    </div>
  );
};

export default ColumnStructure;
