import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import coin from '../../assets/images/coin.png';
import vaso from '../../assets/images/vaso.png';
import usuarioCel from '../../assets/images/usuarioCel.jpg';
import usuarioCelDois from '../../assets/images/usuarioCelDois.jpg';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 imgText">
            <h3>
            Acesse 2500+ Conteúdos Online sobre Investimento de uma das maior res corretoras do Brasil
            </h3>
            <Link className="btn btn-success bottom" to="/signup">Inscreva-se</Link>
          </div>
          <div className="col-md-6">
            <img src={usuarioCel} alt="Pessoa usando celular" />
          </div>
        </div>
      </div>
        <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <div className="capaUm">
        <h1 id="tituloInvestir" >Aprenda a Investir na Prática</h1>
        <h2 className="right">01</h2>
        <div className="container containersDois">
          <span className="cinza">
          <div className="row">
            <div className="col-md-6">
              <img src={usuarioCelDois} width="260px" alt="Pessoa usando celular" />
            </div>
            <div className="col-md-6 imgText">
              O primeiro passo é assistir o módulo 1 
            </div>
          </div>
          </span>
        </div>

        <h2 className="left">02</h2>
        <div className="container containersDois">
          <div className="row">
            <div className="col-md-6 imgText">
              O segundo passo é fazer uma aplicação de acordo com quanto quer investir.
              E fique tranquilo, investir não é coisa pra quem tem muito dinheiro.
            </div>
            <div className="col-md-6">
            <img src={coin} width="260px" alt="Moeda" />
            </div>
          </div>
        </div>


        <h2 className="right">03</h2>
        <div className="container containersDois">
          <div className="row">
            <div className="col-md-6">
              <img src={vaso} width="260px" alt="Vaso" />
            </div>
            <div className="col-md-6 imgText">
              Ao final de cada Módulo você terá a opção de aplicar seu dinheiro no Investimento visto na aula.
              E o melhor de tudo isso é que ao investir você vai receber cashback, pela sua iniciativa e começar a economizar com a gente.
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
          
export default Home;