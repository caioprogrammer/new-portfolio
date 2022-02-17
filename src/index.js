import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';

ReactDOM.render( <App /> , document.getElementById('root'));

const loading = document.getElementById('loading');
const nameAnimate = document.getElementById('nameAnimate');
const nameAnimate1 = document.getElementById('nameAnimate1');
const nameAnimate2 = document.getElementById('nameAnimate2');

const menuOpener = document.getElementById('menuOpener');
const menuCloser = document.getElementById('menuCloser');

menuOpener.addEventListener('click', () => {
    document.querySelector('.mainMenu').classList.add('act')
})
menuCloser.addEventListener('click', () => {
    document.querySelector('.mainMenu').classList.remove('act')
})








setTimeout(() => {
    loading.classList.add('active');
}, 3000);

setTimeout(() => {
    nameAnimate.classList.add('tracking-in-contract');
    nameAnimate1.classList.add('tracking-in-contract-bck-bottom')
    nameAnimate2.classList.add('tracking-in-contract-bck-bottom')
}, 3100)