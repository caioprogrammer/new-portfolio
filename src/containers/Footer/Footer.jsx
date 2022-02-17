import React from 'react';
import './Footer.scss';
import { Copyright } from '../../components';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <div className='footer__noise'></div>
        <div className='footer__content container'>
            <div className='footer__content--left'>
                <a href="#/">programmercaio98@gmail.com</a>
                <form className='form'>
                    <div className='form__top'>
                        <div>
                            <input type="text" name='name' id='name' placeholder='nome' required/>
                        </div>
                        <div>
                            <input type="text" name='email' id='email' placeholder='email' required/>
                        </div>
                    </div>
                    <div className='form__bottom'>
                        <label htmlFor="message"></label>
                        <textarea name="message" id="message" cols="30" placeholder='Messagem' rows="10" required></textarea>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
            <div className='footer__content--right'>
                <div className='left'>
                    <h3>Mídias Sociais</h3>
                    <ul>
                        <li><a href="#/">Instagram</a></li>
                        <li><a href="#/">Linkedin</a></li>
                    </ul>
                </div>
                <div className='right'>
                    <h3>Manda um Oi!</h3>
                    <ul>
                        <li><a href="#/">whatsapp</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <Copyright />
    </div>
  )
}

export default Footer