import React, { useEffect, useState, useContext } from 'react'
import { exportTime } from '../../App'

export const Time = () => {
  const value = useContext(exportTime)

  const [time, setTime] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setTime(time.getSeconds() + 1)
    }, 1000)
  }, [time])

  let timeContainerForRender =  time
  console.log(time, timeContainerForRender.getSeconds())
  return (
    <div>
      <p>TIMER</p>
      <p>NOW IS: {time.getSeconds()}</p>
    </div>

  )
}