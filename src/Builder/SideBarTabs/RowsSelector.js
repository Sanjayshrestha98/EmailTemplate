import React, { useContext } from 'react'
import { BuilderContext } from '../../context/BuilderContext';
import { v1 as uuidv1 } from 'uuid';
import SingleRowSetting from './AfterSelection/SingleRowSetting';

function RowsSelector() {
    const layouts = [
        { id: uuidv1(), columns: 1, label: 'One Column', image: "/single.png", },
        { id: uuidv1(), columns: 2, label: 'Two Columns', image: "/double.png" },
        // { id: 3, columns: 3, label: 'Three Columns' },
    ];

    const { rowsList, setRowsList, selectedRow } = useContext(BuilderContext)

    return (
        <>
            {
                selectedRow ? (
                    <SingleRowSetting />
                )
                    :
                    <div className="">
                        {/* <h3>Select Layout</h3> */}
                        <div className='grid gap-5'>
                            {layouts.map(layout => (
                                <img src={layout.image} onClick={() => {
                                    setRowsList((prev) => [...prev, layout])
                                    // console.log(layout)
                                }} className='border w-full' />
                            ))}
                        </div>
                    </div>

            }
        </>
    )
}

export default RowsSelector