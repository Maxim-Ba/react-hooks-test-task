import React, { useState, } from 'react'
import { Item } from '../Item/Item'

export const RightComponent = (props) => {
  const [valueInp, setValueInp] = useState('')
  const [inputIsEmpty, setInputIsEmpty] = useState(false)
  const select =(e) =>{
    if(props.side === 'right'){
      return props.dispatch({type:'SELECT_R', index:parseInt(e.currentTarget.getAttribute('index'))})
    }
    props.dispatch({type:'SELECT_L', index:parseInt(e.currentTarget.getAttribute('index'))})
  }

  const dataList = props.value
  const handleClick = ()=>{
    if (!valueInp){return setInputIsEmpty(true)}
    setInputIsEmpty(false)
    props.side === 'right'
      ? props.dispatch({type:'ADD_TO_RIGHT', item: {name:valueInp, select:false}}) 
      : props.dispatch({type:'ADD_TO_LEFT', item: {name:valueInp, select:false}})
      setValueInp('')
    }
    const handleChange = (e)=>{
      setValueInp(e.target.value)
    }
    
  return (
    <div className=' WnH'>
      <div className='list-group' style={{overflowY: "scroll", height: '300px' }}>
        {dataList.filter(item => item).map((item, index) =>
          <div
            key={index}
            index ={index}
            className='list-group-item'
            onClick={select}
            
          >
            <Item name={item.name} elementIndexSelected={item.select} />
          </div>)}
      </div >
      <div className="input-group mb-3">
        <input onChange={handleChange} type="text" className="form-control"value={valueInp} />
        <button className="btn btn-info" onClick={handleClick}>Добавить</button>
        {inputIsEmpty
        ? <div className="alert alert-danger" role="alert" style={{ 
          top: '105%',
          position: 'absolute'
          }}>
          This field is reqired!
        </div>
        : null
        }
      </div>
    </div>
  )
}