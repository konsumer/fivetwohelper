import React, { useState } from 'react'
import { Toggle, Input, Message } from 'rsuite'

import { useData } from '../data'

export default () => {
  const [ data, setData ] = useData()
  const [ errors, setErrors ] = useState({})

  const updateDay = day => checked => {
    const { fastDays = [] } = data
    const i = fastDays.indexOf(day)
    const err = { ...errors }

    if (checked && i === -1) {
      fastDays.push(day)
    } else {
      fastDays.splice(i, 1)
    }

    delete err.fastDays

    if (fastDays.length > 2) {
      err.fastDays = 'You should only fast 2 days a week.'
    }

    if (fastDays.length && (fastDays[1] === (fastDays[0] + 1) || fastDays[0] === (fastDays[1] + 1))) {
      err.fastDays = 'Your fasting days should be at least a day apart.'
    }

    if (Object.keys(err).length === 0) {
      setData(od => ({ ...od, fastDays }))
    }
    setErrors(err)
  }

  const updateMeal = value => setData(d => ({ ...d, meals: value }))

  const updateCalories = value => setData(d => ({ ...d, calories: value }))

  return (
    <div className='page'>
      <h1>Setup</h1>
      <p>What days of the week do you want to fast?</p>
      <Toggle checkedChildren='Sunday' unCheckedChildren='Sunday' onChange={updateDay(0)} checked={data.fastDays.indexOf(0) !== -1} />
      <Toggle checkedChildren='Monday' unCheckedChildren='Monday' onChange={updateDay(1)} checked={data.fastDays.indexOf(1) !== -1} />
      <Toggle checkedChildren='Tuesday' unCheckedChildren='Tuesday' onChange={updateDay(2)} checked={data.fastDays.indexOf(2) !== -1} />
      <Toggle checkedChildren='Wednesday' unCheckedChildren='Wednesday' onChange={updateDay(3)} checked={data.fastDays.indexOf(3) !== -1} />
      <Toggle checkedChildren='Thursday' unCheckedChildren='Thursday' onChange={updateDay(4)} checked={data.fastDays.indexOf(4) !== -1} />
      <Toggle checkedChildren='Friday' unCheckedChildren='Friday' onChange={updateDay(5)} checked={data.fastDays.indexOf(5) !== -1} />
      <Toggle checkedChildren='Saturday' unCheckedChildren='Saturday' onChange={updateDay(6)} checked={data.fastDays.indexOf(6) !== -1} />
      {errors.fastDays && (<Message style={{ marginTop: '1em' }} type='error' description={errors.fastDays} />)}
      <hr />
      <div>How many meals a day would you like to eat on fasting days? <Input min='2' max='3' onChange={updateMeal} type='number' value={data.meals} /></div>
      <hr />
      <div>Roughly, how many calories will you eat on fasting days? <Input step='20' min='400' max='500' onChange={updateCalories} type='number' value={data.calories} /></div>
    </div>
  )
}
