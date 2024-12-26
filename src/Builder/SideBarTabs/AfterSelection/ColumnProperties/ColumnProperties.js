import React, { useCallback } from 'react'
import { BuilderContext } from '../../../../context/BuilderContext'
import { Trash, Trash2 } from 'lucide-react'
import NumberInput from '../../../../components/NumberInput'
import ColorPicker from '../../../../components/ColorPicker'

function ColumnProperties({ rowid, data }) {

    const { handleDeleteColumn, handleColumnStyleChange, selectedRow } = React.useContext(BuilderContext)

    const [showAllPaddingSides, setShowAllPaddingSides] = React.useState(data.styles.advancedPadding || false)

    const sides = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']

    const handleAllSidesChange = useCallback((value) => {
        sides.forEach(side => handleColumnStyleChange(rowid, data.id, `${side}`, value))
    }, [selectedRow.id, handleColumnStyleChange])



    console.log('data', data)
    return (
        <div className='bg-white shadow p-4 text-xs'>
            <div className='flex items-center justify-between'>

                <label>Column </label>

                <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => { handleDeleteColumn(rowid, data?.id) }}>
                    <Trash2 size={14} />
                </button>
            </div>

            <div className="flex items-center justify-between my-3">
                <label>Column Background</label>
                <div className='flex items-center gap-2 '>
                    <ColorPicker color={data?.styles?.backgroundColor} handleChange={(color) => handleColumnStyleChange(rowid, data.id, 'backgroundColor', color)} fieldName="backgroundColor" />
                    <input
                        type="text"
                        value={data?.styles?.backgroundColor}
                        onChange={(e) =>
                            handleColumnStyleChange(rowid, data.id, 'backgroundColor', e.target.value)
                        }
                        className="border p-2 rounded-md w-24"
                    />
                </div>
            </div>

            <hr />

            <div className='mt-3'>
                <div className='flex justify-between items-center gap-2 '>
                    <span className='font-semibold'>Padding</span>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox"
                            checked={showAllPaddingSides}
                            onChange={(e) => {
                                // handleRowStyleChange(selectedRow.id, 'advancedBorder', e.target.checked)
                                setShowAllPaddingSides(e.target.checked)

                                // if (!e.target.checked) {
                                //     handleAllSidesBorderChange()
                                // }
                            }} class="sr-only peer" />
                        <div class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 ">Advanced</span>
                    </label>
                </div>
                {
                    showAllPaddingSides ?
                        <>
                            {
                                sides.map((side, index) => (
                                    <div className="my-4 flex flex-wrap items-center justify-between" key={index}>
                                        <label className=" text-gray-700">{side}</label>
                                        <div className='flex items-center gap-2 '>

                                            <NumberInput max={30} min={0} step={1}
                                                defaultValue={selectedRow?.styles?.[side]}
                                                onChange={(value) =>
                                                    handleColumnStyleChange(rowid, data.id, side, value)
                                                }
                                            />

                                        </div>
                                    </div>
                                ))
                            }
                        </>

                        :
                        <div className="my-4 flex flex-wrap items-center justify-between">
                            <label className=" text-gray-700">All Sides</label>
                            <div className='flex items-center gap-2 '>

                                <NumberInput max={30} min={0} step={1}
                                    defaultValue={selectedRow?.styles?.borderRadiusTopLeft}
                                    onChange={(value) =>
                                        handleAllSidesChange(value)
                                    }
                                />

                            </div>
                        </div>
                }
            </div>
        </div >
    )
}

export default ColumnProperties