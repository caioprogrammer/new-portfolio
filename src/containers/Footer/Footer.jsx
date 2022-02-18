import React from 'react';
import './Footer.scss';
import { Copyright } from '../../components';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <div className='footer__noise'></div>
        <div className='footer__content container'>
            <div className='footer__content--left'>
                <a href="mailto: programmercaio98@gmail.com">programmercaio98@gmail.com</a>
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
                        <li><a href="https://www.instagram.com/caio.nogueira.509/">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/caio-nogueira-96b773206/">Linkedin</a></li>
                    </ul>
                </div>
                <div className='right'>
                    <h3>Manda um Oi!</h3>
                    <ul>
                        <li><a target={'_blank'} rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5582987459334&text=Quero+decolar+e+ter+minha+loja+virtual!+.+Poderia+me+ajudar%3F&app_absent=0'>whatsapp</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <Copyright />
    </div>
  )
}

export default Footer