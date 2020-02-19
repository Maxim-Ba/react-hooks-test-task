import React from 'react'


export const Button = (props) =>{
  const handleClick = () =>{
    if(props.direction==='>'){
      return props.dispatch({type: 'DELETE_IN_RIGHT'})
        // props.dispatch({type:'ADD_TO_LEFT', item: {name:valueInp}})
      
    }
    
    props.dispatch({type: 'DELETE_IN_LEFT'})
    // props.dispatch({type:'ADD_TO_RIGHT', item: {name:valueInp}}) 
    
  }
  return(
    <button className='btn btn-primary' onClick={handleClick}>
      {props.direction} button {props.direction}
    </button>
  )
}