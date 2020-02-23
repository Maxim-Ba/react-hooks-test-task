import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Footer = () => {
  const [isOpened, setIsOpened] = useState(false);

  const open = (e) => {
    setIsOpened(true);
  };
  const close = (e) => {
    setIsOpened(false);
  };
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={'footer-transition'}
      timeout={3000}
    >
      <footer className='footer container-fluid'>
        <section className='about-project' onClick={!isOpened ? open : close}>
          <div className={`about-project__link ${isOpened ? 'about-project_open' : null}`}>
            <p>About project </p>{isOpened
              ? <p className='about-project__link_close'>✖</p>
              : null}
          </div>
        </section>
        <CSSTransition
          in={isOpened}
          unmountOnExit
          classNames={'project-description-transition'}
          timeout={200}
        >
          <section className='project-description'>
            <div>
              <p>In this project used technologies:</p>
              <ul className='list'>
                <li>React (Hooks, Context, create-react-app)</li>
                <li>Bootstrap</li>
                <li>ReactTransitionGroup</li>
                <li>Git</li>
              </ul>
            </div>
          </section>
        </CSSTransition>
      </footer>
    </CSSTransition>
  );
};


