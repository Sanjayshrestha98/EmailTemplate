import React from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'

function ColumnStructure() {

  const { selectedRow, handleRowStyleChange } = React.useContext(BuilderContext)

  return (
    <div>
      <div>
        {
          selectedRow?.columns.map((column, index) => {
            return (
              // <Columns key={column.id} data={column} rowStyles={selectedRow.styles} rowid={selectedRow.id} />
              <div key={column.id}>
                <label>Column {index + 1}</label>
                <input type="range" min="1" max="12" value={column.span} onChange={(e) => handleRowStyleChange(selectedRow.id, `columns[${index}].span`, e.target.value)} />
                <span>{column.span}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ColumnStructure