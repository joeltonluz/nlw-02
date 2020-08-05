import React from 'react';

import whatsappIcon from '../../asssets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/48449121?s=460&u=5c502861855752d5b0d30e5cd9936d4013b305d0&v=4" alt=""/>
        <div>
          <strong>Joelton Lino Luz</strong>
          <span>Programador</span>
        </div>
      </header>

      <p>
        Bláb la´balbal´bálblábababasfd sa dfasdfasdfasdf
        <br /><br />
        Bláb la´balbal´bálblábababasfd sa dfasdfasdfasdf
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;