import React from 'react'

function RowsSelector() {
    const layouts = [
        { id: 1, columns: 1, label: 'One Column' },
        { id: 2, columns: 2, label: 'Two Columns' },
        { id: 3, columns: 3, label: 'Three Columns' },
    ];

    return (
        <div className="layout-selector">
            <h3>Select Layout</h3>
            {layouts.map(layout => (
                <button
                    key={layout.id}
                    // onClick={() => addRow(layout.columns)}
                    className="layout-button"
                >
                    {layout.label}
                </button>
            ))}
        </div>
    )
}

export default RowsSelector