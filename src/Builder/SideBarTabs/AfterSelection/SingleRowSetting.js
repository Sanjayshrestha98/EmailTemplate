import React, { useContext } from 'react'
import Accordion from '../../../components/Accordion'
import Backgrounds from './RowProperties/Backgrounds'
import Layout from './RowProperties/Layout'
import Cardstyle from './RowProperties/Cardstyle'
import ColumnStructure from './RowProperties/ColumnStructure'
import { BuilderContext } from '../../../context/BuilderContext'
import { X } from 'lucide-react'
import Borders from './RowProperties/RowBorder/Borders'

function SingleRowSetting() {

    const { setSelectedRow } = useContext(BuilderContext)

    return (
        <div>

            <div className='border-b  flex items-center justify-between'>
                <label className='p-4 text-sm font-semibold'>Row Properties</label>
                <div className='flex items-center'>
                    <span className='p-4 hover:bg-gray-300 cursor-pointer border-l' onClick={() => setSelectedRow(null)}>
                        <X size={20} />
                    </span>
                </div>
            </div>
            <Accordion title="BACKGROUNDS" className="mb-1" defaultOpen={true}>
                <Backgrounds />
            </Accordion>
            <Accordion title="BORDERS" className="mb-1" defaultOpen={true}>
                <Borders />
            </Accordion>
            <Accordion title="LAYOUT" className="mb-1" defaultOpen={true}>
                <Layout />
            </Accordion>
            <Accordion title="CARDS STYLE" className="mb-1" defaultOpen={true}>
                <Cardstyle />
            </Accordion>
            <Accordion title="COLUMNS STRUCTURE" className="mb-1" defaultOpen={true}>
                <ColumnStructure />
            </Accordion>
        </div>
    )
}

export default SingleRowSetting