
// function ColumnStructure() {


//   return (
//     <div>
//       <div>
//         {
//           selectedRow?.columns.map((column, index) => {
//             return (
//               // <Columns key={column.id} data={column} rowStyles={selectedRow.styles} rowid={selectedRow.id} />
//               <div key={column.id}>
//                 <label>Column {index + 1}</label>
//                 <input type="range" min="1" max="12"
//                   onChange={(e) =>
//                     handleColumnStyleChange(selectedRow.id, column.id, 'span', e.target.value)}
//                 />
//                 <span>{column.span}</span>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default ColumnStructure

import React, { useEffect, useState } from "react";
import { GripVertical } from "lucide-react";
import { BuilderContext } from '../../../../context/BuilderContext'
import ColumnProperties from "../ColumnProperties/ColumnProperties";
import { use } from "react";

const ColumnStructure = () => {
  const { selectedRow, handleColumnStyleChange,handleAddColumn } = React.useContext(BuilderContext)
  console.log('selectedRow', selectedRow)

  useEffect(() => {
    setColumns(selectedRow?.columns);
    setActiveColumn(selectedRow?.columns[0]);
  }, [selectedRow]);

  const [columns, setColumns] = useState(selectedRow?.columns);
  const [isDragging, setIsDragging] = useState(false);
  const [activeColumn, setActiveColumn] = useState(selectedRow?.columns[0]);
  const [dragIndex, setDragIndex] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialSpans, setInitialSpans] = useState({});

  const handleMouseDown = (e, index) => {
    setIsDragging(true);
    setDragIndex(index);
    setInitialX(e.clientX);
    setInitialSpans({
      col1: columns[index].span,
      col2: columns[index + 1].span,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - initialX;
      const deltaSpan = Math.round(deltaX / 10); // Adjust sensitivity
      const col1Span = Math.max(1, Math.min(12, initialSpans.col1 + deltaSpan));
      const col2Span = Math.max(1, Math.min(12, initialSpans.col2 - deltaSpan));

      if (col1Span + col2Span === initialSpans.col1 + initialSpans.col2) {
        const updatedColumns = [...columns];
        updatedColumns[dragIndex].span = col1Span;
        updatedColumns[dragIndex + 1].span = col2Span;
        setColumns(updatedColumns);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragIndex(null);
  };


  return (
    <div
      className="select-none bg-gray-100 "
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="pb-4 px-4">

        <div className="flex justify-end">
          <button onClick={()=>{
            handleAddColumn(selectedRow.id)
          }} className="mb-3 ">
            + Add New
          </button>
        </div>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          {columns.map((col, index) => (
            <React.Fragment key={col.id}>
              <div
                onClick={() => setActiveColumn(col)}
                className={`column  relative text-center border py-2 rounded-md bg-white ${activeColumn?.id === col.id ? "bg-blue-200" : ""}`}
                style={{
                  flexGrow: col.span,
                }}
              >
                {col.span}
                {activeColumn?.id === col.id && (
                  <div className="absolute -bottom-6 rotate-45 left-1/2 -translate-x-1/2  h-[14px] w-[14px] bg-white">
                  </div>
                )
                }

              </div>
              {index < columns.length - 1 && (
                <div
                  className="divider cursor-e-resize h-full"

                  onMouseDown={(e) => handleMouseDown(e, index)}
                >
                  <GripVertical />
                </div>
              )}

            </React.Fragment>
          ))}
        </div>
      </div>

      {
        activeColumn && (
          <ColumnProperties rowid={selectedRow.id} data={activeColumn} />
        )
      }

    </div >
  );
};

export default ColumnStructure;
