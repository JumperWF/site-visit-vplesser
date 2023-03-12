import React from 'react';
import { useRef } from "react";
import './css/Render.css';
import checkBtn from './img/check.png'

const Render = (props) => {
    const aboutRef = useRef();

    const openTab = () => {
  
        let hiddenDiv = aboutRef.current.querySelector('.hiddenDiv');
        // let vert = aboutRef.current.querySelector('.vert');
        // let animSvg = aboutRef.current.querySelector('.animSvg');
        let animCheck = aboutRef.current.querySelector('.checkImg');

        
        if (hiddenDiv.style.height === 'auto') {
            hiddenDiv.classList.remove('scrollDown');
            hiddenDiv.style.height = '0';
            // animSvg.classList.remove('spinnerSvg');
            animCheck.classList.remove('spinnerImg');
            animCheck.classList.remove('checkImg-rotate');
            
            // setTimeout(() => {
            //     vert.classList.remove('hidden');// спрятать +, проявить -
            // }, 500);

           
        } else {
            hiddenDiv.classList.add('scrollDown');
            hiddenDiv.style.height = 'auto';
            // animSvg.classList.add('spinnerSvg');
            animCheck.classList.add('spinnerImg');
            animCheck.classList.add('checkImg-rotate');


            // setTimeout(() => {
            //     vert.classList.add('hidden');// спрятать +, проявить -
            // }, 500);

            
        }

        // setTimeout(() => {
        //     vert.classList.add('hidden');// спрятать +, проявить -
        // }, 500);
    }

    return (
      <div className="Title" ref={aboutRef}>
            <h3>
                <button onClick={openTab}>
                {/* <svg className = 'animSvg' aria-hidden="true" focusable="false" viewBox="0 0 10 10">
                    <rect className="vert" height="8" width="2" y="1" x="4"/>
                    <rect height="2" width="8" y="4" x="1"/>
                </svg>  */}
                <img src={checkBtn} alt="check" className='checkImg' />
                {props.buttonText}
                </button> 
            </h3>
            <div className="hiddenDiv">
                {props.hiddenText}
            <button onClick={openTab} className='closeThisDiv'>Свернуть</button>
            </div>
        </div>
    )
} 

export default Render;