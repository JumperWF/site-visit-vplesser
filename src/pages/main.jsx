import React from 'react';
import './css/main.css';
import Render from './components/Render';
import About from './components/About'
import WorkWith from './components/WorkWith';
import NotWorkingWith from './components/NotWorkingWith';
import Supervisia from './components/Supervisia';
import Training from './components/Training';
import Payment from './components/Payment';
import WorkFormat from './components/WorkFormat';
import LegalAsp from './components/LegalAsp';
import SocialIcons from './components/Social-icons';


function MainPage() {
    return (
        <div className="main">

            <div className="break"><img className='divider' src={require("./components/img/divider.png")} alt="divider" /></div>

            <Render buttonText="Обо мне" hiddenText= <About /> />
            <Render buttonText="C кем и с чем я работаю" hiddenText= <WorkWith /> />
            <Render buttonText="С чем точно не ко мне" hiddenText= <NotWorkingWith /> />
            <Render buttonText="Супервизия" hiddenText= <Supervisia /> />
            <Render buttonText="Тренинг саморегуляции" hiddenText= <Training /> />
            <Render buttonText="Cколько стоит и как оплатить" hiddenText= <Payment /> />
            <Render buttonText="Формат работы" hiddenText= <WorkFormat />/>
            <Render buttonText="Юридические аспекты" hiddenText= <LegalAsp />/>
                   
            <div className="break"><img className='divider' src={require("./components/img/divider.png")} alt="divider" /></div>

            <SocialIcons />
            
            {/* <div className="break"><img className='divider' src={require("./components/img/divider.png")} alt="divider" /></div>

            <div className="smi"><button><a href='/smi'>Статьи</a></button></div> */}
        </div>


    )
}


export default MainPage;

