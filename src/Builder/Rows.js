import React, { useContext } from 'react'
import { BuilderContext } from '../context/BuilderContext';
import { mouseOver } from '../utils/HoverToggle/MouseOver';
import { mouseLeave } from '../utils/HoverToggle/MouseLeave';

const Columns = React.lazy(() => import('./Columns'));

const Rows = React.memo(({ data }) => {

  const { rootState, selectedRow, setSelectedRow, setSelectedTab, setSelectedNode } = useContext(BuilderContext)

  const contentAreaStyles = {
    padding: `${data?.styles?.padding}px`,
    margin: `${data?.styles?.margin}px`,
    backgroundPosition: data?.styles?.backgroundCenter ? 'center' : 'top left',
    backgroundSize: data?.styles?.backgroundFit ? 'cover' : 'contain',
    backgroundRepeat: data?.styles?.backgroundRepeat ? 'repeat' : 'no-repeat',
    backgroundImage: (data?.styles?.hasBackgroundImage && data?.styles?.applyImageTo === "cell") && `url(${data?.styles?.url})`,
    backgroundColor: `${data?.styles?.contentAreaBackgroundColor}`,

    borderLeft: `${data?.styles?.borderLeft.width}px ${data?.styles?.borderLeft.type} ${data?.styles?.borderLeft.color}`,
    borderRight: `${data?.styles?.borderRight.width}px ${data?.styles?.borderRight.type} ${data?.styles?.borderRight.color}`,
    borderTop: `${data?.styles?.borderTop.width}px ${data?.styles?.borderTop.type} ${data?.styles?.borderTop.color}`,
    borderBottom: `${data?.styles?.borderBottom.width}px ${data?.styles?.borderBottom.type} ${data?.styles?.borderBottom.color}`,
    borderTopLeftRadius: `${data?.styles?.borderRadiusTopLeft}px`,
    borderTopRightRadius: `${data?.styles?.borderRadiusTopRight}px`,
    borderBottomLeftRadius: `${data?.styles?.borderRadiusBottomLeft}px`,
    borderBottomRightRadius: `${data?.styles?.borderRadiusBottomRight}px`,

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

      valign={data?.styles?.verticalAlign}

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

      <table align={rootState?.alignment} border="0" cellPadding="0" cellSpacing="0" className="row-content"
        role="presentation"
      // style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
      // width={rootState.width}
      >
        <tbody>
          <div style={contentAreaStyles} role='presentation' className='flex'>

            {
              data?.columns?.map((value) => {
                return (
                  <Columns key={value?.id} data={value} rowStyles={data?.styles} rowid={data?.id} />
                )
              })
            }

          </div>
        </tbody>
      </table>
    </tr>
  )
})

export default Rows