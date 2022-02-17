import React from 'react';
import './App.scss';
import './script.js';


import { Header, Banner, Works } from './containers'; 
//IMPORTAÇÃO DOS CONTAINERS 
import { Welcome, Promotional, Title, MobileMenu } from './components'; 
//IMPORTAÇÃO DOS COMPONENTES NECESSÁRIOS

const App = () => {
    return (
        <div className='App'>
            <Welcome />
            <MobileMenu />
            
            <Header />
            <Banner />
            <Promotional />
            <Title />
            <Works />
        </div>
    )
}

export default App