import React from 'react'
import SingleNode from './SingleNode'
import { BuilderContext } from '../context/BuilderContext'

function Columns({ data, width }) {

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
            className={` relative hover:outline hover:outline-green-600 `}>

            {
                data?.content?.map((value) => {
                    return <SingleNode key={value?.id} data={value} width={`${(rootState?.width / 12) * data?.span}px`} />
                })
            }
        </td>
    )
}

export default Columns