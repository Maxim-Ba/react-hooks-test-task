import React, { useState, useReducer } from 'react';
import './App.css';
import { RightComponent } from './components/rightComponent/RightComponent';
import { LeftComponent } from './components/leftComponent/LeftComponent';
import { Button } from './button/Button';
import { Time } from './components/time/Time';
import { Reducer } from './reducer/Reducer';


const exportTime = React.createContext(new Date());
function App() {
  const  initialState={
    right:[],
    left:[],
  }
  const [state ,dispatch] = useReducer(Reducer, initialState)
  // const listsValues = React.createContext(state)
  console.log(state)
  return (
        <div className="App ">
          <header className="App-header">
          </header>
          <section className='App__wraper'>
            <RightComponent dispatch={dispatch} value={state.right} side='right'/>
            <div className='btn-group-vertical'>
              <Button direction='>' dispatch={dispatch} />
              <Button direction='<' dispatch={dispatch}/>
            </div>
            <RightComponent dispatch={dispatch} value={state.left} side='left'/>
          </section>
          {/* <Time /> */}
        </div>
  );
}

export default App;
export { exportTime }