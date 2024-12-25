import React from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'

function ColumnProperties({ rowid, data }) {

    const { handleDeleteColumn } = React.useContext(BuilderContext)

    console.log('data', data)
    return (
        <div className='bg-white shadow p-4'>ColumnProperties {data?.span}

            <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => { handleDeleteColumn(rowid, data?.id) }}>
                Delete
            </button>
        </div>
    )
}

export default ColumnProperties