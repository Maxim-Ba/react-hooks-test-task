import React from 'react'


export const Item = (item) =>{
  const style = item.elementIndexSelected ?{backgroundColor : 'red'}:{backgroundColor : 'white'}

  return(
    <p style={style}>
      {item.name}
    </p>
  )
}