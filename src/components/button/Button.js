import React from 'react'


export const Button = (props) =>{
  const handleClick = () =>{
    if(props.direction === '>'){
      if (props.selectedR) {
        props.dispatch({type:'ADD_TO_LEFT', item: {name: props.selectedR.name, select: false }})
      }
      props.dispatch({ type: 'ADD_TO_SELECTEDR', item: null })
      return props.dispatch({type: 'DELETE_IN_RIGHT'})
      
    }
    if (props.selectedL) {
      props.dispatch({type:'ADD_TO_RIGHT', item: {name:props.selectedL.name, select: false}})     
    }
    props.dispatch({ type: 'ADD_TO_SELECTEDL', item: null })
    props.dispatch({type: 'DELETE_IN_LEFT'})
    
    
  }
  return(
    <button className='btn btn-primary button' onClick={handleClick}>
      {props.direction} button {props.direction}
    </button>
  )
}