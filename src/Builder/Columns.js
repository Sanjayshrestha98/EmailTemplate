import React from 'react'
import SingleNode from './SingleNode'
import { BuilderContext } from '../context/BuilderContext'

function Columns({ data, width, rowid }) {

    console.log('columns', data)
    console.log('calculateWidth', width)

    const { rootState } = React.useContext(BuilderContext)

    return (
        <td
            valign='top'
            id='mp101-1'
            style={{
                width: `${(rootState?.width / 12) * data?.span}px`
            }}
            className={`  `}>

            {
                data?.content?.map((value) => {
                    return <SingleNode rowid={rowid} key={value?.id} data={value} width={`${(rootState?.width / 12) * data?.span}px`} />
                })
            }
        </td>
    )
}

export default Columns