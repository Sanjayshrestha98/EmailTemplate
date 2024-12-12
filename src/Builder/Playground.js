
import React from 'react'
import Rows from './Rows'
import { BuilderContext } from '../context/BuilderContext'
import { mouseOver } from '../utils/HoverToggle/MouseOver'
import { mouseLeave } from '../utils/HoverToggle/MouseLeave'

function Playground() {

  const { rootState, rowsList, selectedRow } = React.useContext(BuilderContext)

  console.log('rowsList', rowsList)

  const rootStyles = {
    backgroundColor: rootState?.backgroundColor,
    backgroundImage: `url(${rootState?.hasBackgroundImage && rootState?.url})`,
    backgroundRepeat: rootState?.backgroundRepeat ? 'repeat' : 'no-repeat',
    backgroundSize: rootState?.backgroundFit ? 'cover' : 'contain',
    backgroundPosition: rootState?.backgroundCenter ? 'center' : 'top left',
    tableLayout: 'fixed'
  }

  return (
    <div className='w-full p-4 transition-all duration-300 ease-in-out pt-1'>
 
      <table
        border="0"
        fixed

        style={rootStyles}

        width="100%" cellPadding="0" cellSpacing="0" className="nl-container" role="presentation">
        <tbody>
          {
            rowsList.map((value) => {
              return <Rows key={value.id} data={value} />
            })
          }
          <Rows />
        </tbody>
      </table>

      {/* <DragAndDrop /> */}

    </div >
  )
}

export default Playground