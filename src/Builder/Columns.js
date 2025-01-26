import React from 'react'
import SingleNode from './SingleNode'
import { BuilderContext } from '../context/BuilderContext'

function Columns({ data, rowStyles, rowid }) {

    const { rootState } = React.useContext(BuilderContext)

    return (
        <div
            valign={rowStyles?.verticalAlign}
            id='mp101-1'
            style={{
                alignContent: `${rowStyles?.verticalAlign === "middle" ?
                    'center' : rowStyles?.verticalAlign === "top" ?
                        'flex-start' : 'flex-end'}`,
                width: `${(rootState?.width / 12) * data?.span}px`,
                backgroundColor: `${data?.styles?.backgroundColor}`,
                paddingLeft: `${data?.styles?.padding?.paddingLeft}px`,
                paddingRight: `${data?.styles?.padding?.paddingRight}px`,
                paddingTop: `${data?.styles?.padding?.paddingTop}px`,
                paddingBottom: `${data?.styles?.padding?.paddingBottom}px`,
                borderLeft: `${data?.styles?.borderLeft.width}px ${data?.styles?.borderLeft.type} ${data?.styles?.borderLeft.color}`,
                borderRight: `${data?.styles?.borderRight.width}px ${data?.styles?.borderRight.type} ${data?.styles?.borderRight.color}`,
                borderTop: `${data?.styles?.borderTop.width}px ${data?.styles?.borderTop.type} ${data?.styles?.borderTop.color}`,
                borderBottom: `${data?.styles?.borderBottom.width}px ${data?.styles?.borderBottom.type} ${data?.styles?.borderBottom.color}`,
            }}
            className={`  `}>
            <div>
                {
                    data?.content?.length > 0 ?
                        data?.content?.map((value) => {
                            return <SingleNode rowid={rowid} key={value?.id} data={value} width={`${(rootState?.width / 12) * data?.span}px`} />
                        })
                        :
                        <>No Contents</>
                }
            </div>
        </div>
    )
}

export default Columns