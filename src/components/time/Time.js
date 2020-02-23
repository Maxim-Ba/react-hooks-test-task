import React, { useEffect, useState, useContext } from 'react'
import { exportTime } from '../../App'

export const Time = () => {
  const value = useContext(exportTime)
  const [time, setTime] = useState(value)
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1000)
    }, 1000)
  }, [time])
  let date = new Date(time)
  return (
    <div>
      <p>TIMER</p>
      <p>NOW IS: {`${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`}</p>
    </div>
  )
}