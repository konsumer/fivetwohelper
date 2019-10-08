import React from 'react'
import { Calendar } from 'rsuite'

import { useData } from '../data'

export default () => {
  const [ data, setData ] = useData()

  const renderCell = date => {
    if (data.fastDays.indexOf(date.getDay()) !== -1) {
      const k = `${date.getDate()}/${date.getFullYear()}`
      return <div className='day fast'>
        {data.menu[k] && (
          <div>
            {data.menu[k].meal}: {data.menu[k].title}
          </div>
        )}
      </div>
    }
  }
  return (
    <div className='page'>
      <Calendar bordered renderCell={renderCell} onSelect={console.log} />
    </div>
  )
}
