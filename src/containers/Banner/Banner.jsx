import React from 'react';
import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner container' id='home'>
        <div className='banner__content-text'>
            <h1 className='' id='nameAnimate'>Desenvolvedor</h1>
            <h1 className='' id='nameAnimate1'>Web</h1>
            <h1 className='' id='nameAnimate2'>Front-end</h1>
        </div>
        {/* <div className='banner__content-mini'>
            <p>
                Caio Nogueira, Desenvolvedor Web Front-end
            </p>
            <p>
                Especialista em e-commerces Tray
            </p>
            <p>
                Reside em Maceió
            </p>
        </div> */}
        
    </div>
  )
}

export default Banner