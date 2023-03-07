import React from 'react';
import { useRef } from "react";
import './css/Render.css';

const Render = (props) => {
    const aboutRef = useRef();

    const openTab = () => {
  
        let hiddenDiv = aboutRef.current.querySelector('.hiddenDiv');
        let vert = aboutRef.current.querySelector('.vert');
        let animSvg = aboutRef.current.querySelector('.animSvg');
        
        if (hiddenDiv.style.height === 'auto') {
            hiddenDiv.style.height = '0';
            hiddenDiv.classList.remove('scrollDown');
            animSvg.classList.remove('spinnerSvg');
            
            setTimeout(() => {
                vert.classList.remove('hidden');// спрятать +, проявить -
            }, 500);

           
        } else {
            hiddenDiv.style.height = 'auto';
            hiddenDiv.classList.add('scrollDown');
            animSvg.classList.add('spinnerSvg');
            setTimeout(() => {
                vert.classList.add('hidden');// спрятать +, проявить -
            }, 500);

            
        }

        // setTimeout(() => {
        //     vert.classList.add('hidden');// спрятать +, проявить -
        // }, 500);
    }

    return (
      <div className="Title" ref={aboutRef}>
            <h3>
                <button onClick={openTab}>
                <svg className = 'animSvg' aria-hidden="true" focusable="false" viewBox="0 0 10 10">
                    <rect className="vert" height="8" width="2" y="1" x="4"/>
                    <rect height="2" width="8" y="4" x="1"/>
                </svg> 
                {props.buttonText}
                </button> 
            </h3>
            <div className="hiddenDiv">
                {props.hiddenText}
            </div>
        </div>
    )
} 

export default Render;