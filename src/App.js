import React, { useReducer } from 'react';
import './App.css';
import { RightComponent } from './components/rightComponent/RightComponent';
import { Button } from './components/button/Button';
import { Time } from './components/time/Time';
import { Reducer } from './reducer/Reducer';
import { Footer } from './components/Footer/Footer';
import {CSSTransition} from 'react-transition-group';

const exportTime = React.createContext(Date.now());
function App() {
  const initialState = {
    right: [],
    left: [],
    selectedR: null,
    selectedL: null
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <CSSTransition  
      in={true}
      appear={true}
      timeout={800}
      classNames="first-transition"
      
    >
    <div className="App ">
      <header className="App-header">
        <h1>Test task</h1>
      </header>
      <section className='App__wraper flex-column  flex-sm-row'>
        <RightComponent dispatch={dispatch} value={state.right} side='right' />
        <CSSTransition
          appear={true}
          in={true}
          timeout={1000}
          classNames="item-button-transition"
        >
        <div className='btn-group-vertical'>
          <Button direction='>' dispatch={dispatch} selectedR={state.selectedR} />
          <Button direction='<' dispatch={dispatch} selectedL={state.selectedL} />
        </div>
        </CSSTransition>
        <RightComponent dispatch={dispatch} value={state.left} side='left' />
      </section>
      <Time />
      <Footer />
    </div>
    </CSSTransition  >
  );
}

export default App;
export { exportTime };