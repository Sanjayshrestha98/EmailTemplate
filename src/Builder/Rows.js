import React, { useContext, useEffect, useReducer, useState } from 'react'
import { BuilderContext } from '../context/BuilderContext';
import { mouseOver } from '../utils/HoverToggle/MouseOver';
import { mouseLeave } from '../utils/HoverToggle/MouseLeave';

const Columns = React.lazy(() => import('./Columns'));

const Rows = React.memo(({ data }) => {

  const { rootState, selectedRow, setSelectedRow, setSelectedTab, setSelectedNode } = useContext(BuilderContext)

  const [styles, setStyles] = useState(data.styles)
  const calculateWidth = (span) => {
    return (rootState?.width / 12) * span;
  };

  // useEffect(() => {
  //   if (selectedRow?.id === data?.id) {

  //   }
  // }, [selectedRow?.id])

  console.log('dataaa', data?.id, data.styles)

  const contentAreaStyles = {
    padding: `${data?.styles?.padding}px`,
    margin: `${data?.styles?.margin}px`,
    backgroundPosition: data?.styles?.backgroundCenter ? 'center' : 'top left',
    backgroundSize: data?.styles?.backgroundFit ? 'cover' : 'contain',
    backgroundRepeat: data?.styles?.backgroundRepeat ? 'repeat' : 'no-repeat',
    backgroundImage: (data?.styles?.hasBackgroundImage && data?.styles?.applyImageTo === "cell") && `url(${data?.styles?.url})`,
    backgroundColor: `${data?.styles?.contentAreaBackgroundColor}`,
    borderLeft: `${data?.styles?.borderLeft}px ${data?.styles?.borderType} ${data?.styles?.borderColor}`,
    borderRight: `${data?.styles?.borderRight}px ${data?.styles?.borderType} ${data?.styles?.borderColor}`,
    borderTop: `${data?.styles?.borderTop}px ${data?.styles?.borderType} ${data?.styles?.borderColor}`,
    borderBottom: `${data?.styles?.borderBottom}px ${data?.styles?.borderType} ${data?.styles?.borderColor}`,
    borderRadiusTopLeft: `${data?.styles?.borderRadiusTopLeft}px`,
    borderRadiusTopRight: `${data?.styles?.borderRadiusTopRight}px`,
    borderRadiusBottomLeft: `${data?.styles?.borderRadiusBottomLeft}px`,
    borderRadiusBottomRight: `${data?.styles?.borderRadiusBottomRight}px`,

  }

  return (
    <tr
      id={data?.id}
      onMouseOver={(e) => {
        mouseOver(e, null, "group/row")
      }}
      onMouseLeave={(e) => {
        mouseLeave(e, null, "group/row")
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedNode(null)
        setSelectedRow(data)
        setSelectedTab("rows")
      }}

      style={{
        backgroundColor: `${data?.styles?.backgroundColor}`,
        backgroundImage: (data?.styles?.hasBackgroundImage && data?.styles?.applyImageTo === "row") && `url(${data?.styles?.url})`,
        backgroundPosition: data?.styles?.backgroundCenter ? 'center' : 'top left',
        backgroundSize: data?.styles?.backgroundFit ? 'cover' : 'contain',
        backgroundRepeat: data?.styles?.backgroundRepeat ? 'repeat' : 'no-repeat',
      }}
      className={`${selectedRow?.id === data?.id ? 'outline' : ''} group/row relative  outline-2 -outline-offset-2 outline-blue-700 bg-red-400`}>
      <div className='absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2 text-white group-hover/row:block hidden'>Row</div>
      {
        selectedRow && (selectedRow?.id === data?.id && <><div className='absolute top-0 text-xs bg-blue-600 right-0 w-fit px-2 text-white  '>This is selected</div></>)
      }

      <table align={rootState.alignment} border="0" cellPadding="0" cellSpacing="0" className="row-content"
        role="presentation"
      // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
      // width={rootState.width}
      >
        <tbody>
          <tr style={contentAreaStyles} >

            {
              data?.columns?.map((value) => {
                return (
                  <Columns key={value?.id} data={value} width={calculateWidth(value?.span)} rowid={data?.id} />
                )
              })
            }
          </tr>
        </tbody>
      </table>
    </tr>
  )
})

export default Rows