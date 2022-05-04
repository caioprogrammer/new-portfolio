import React from "react";
import "./Works.scss";

const Works = () => {
  return (
    <div className="works" id="works">
      <main className="wrapper">
        <section className="container section bg1">
        <p className="text">
                <a href="https://www.bknjoias.com.br" target={'_blank'} rel="noreferrer" className="glitch">
                    <span aria-hidden="true">BKN Joias</span>
                        BKN Joias
                    <span aria-hidden="true">BKN Joias</span>   
                </a>
            </p>
            <div className="bg-tag">VTEX CMS</div>
        </section>
        
        <section className=" container section bg2">
        <p className="text">
                <a href="https://www.glossyshoes.com.br/"  target={'_blank'} rel="noreferrer" className="glitch">
                    <span aria-hidden="true">Glossy Shoes</span>
                        Glossy Shoes
                    <span aria-hidden="true">Glossy Shoes</span>      
                </a>
            </p>
            <div className="bg-tag">TrayCorp</div>
        </section>
        <section className="container section bg3">
            <p className="text">
                <a href="https://www.timbobikecenter.com.br/"  target={'_blank'} rel="noreferrer" className="glitch">
                    <span aria-hidden="true">Timbó Bike Center</span>
                        Timbó Bike Center
                    <span aria-hidden="true">Timbó Bike Center</span>       
                </a>
            </p>
            <div className="bg-tag">TrayCorp</div>
        </section>

        <section className="container section bg4">
            <p className="text">
                <a href="https://www.lgnpneus.com.br/"  target={'_blank'} rel="noreferrer" className="glitch">
                    <span aria-hidden="true">LGN Pneus</span>
                        LGN Pneus
                    <span aria-hidden="true">LGN Pneus</span>      
                </a>
            </p>
            <div className="bg-tag">TrayCorp</div>
        </section>

        <section className="container section bg5">
            <p className="text">
                <a href="https://www.pizzita.com.br/"  target={'_blank'} rel="noreferrer" className="glitch">
                    <span aria-hidden="true">pizzita</span>
                    pizzita
                    <span aria-hidden="true">pizzita</span>       
                </a>
            </p>
            <div className="bg-tag">VTEX CMS</div>
        </section>

        
      </main>
    </div>
  );
};

export default Works;
