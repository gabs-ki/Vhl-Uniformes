import React, { useState } from 'react'
import BackgroundHome from './images/backgroundHome.svg'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Links } from 'react-router-dom'

function SobreNos() {

  const [barraAberta, setBarraAberta] = useState(true)

  return (
    <>

      <div className="containerSobreNos">

        <img className='containerHome__backgroundHome' src={BackgroundHome} alt="" />

        <section>

          <header className='containerHome__cabecalhoHome'>

            <div className='cabecalhoHome__logo'>
              <img className='logoHome' src={LogoVHL} alt="" />
            </div>

            <i onClick={() => {
              setBarraAberta(!barraAberta)
            }} className='iconeMenuHome'>

              <img className='iconeMenu' src={MenuIcon} alt="" />

            </i>

            <div className={`${barraAberta ? 'barraNavegacaoMenu' : 'barraNavegacaoMenuAberta'}`}>

              <div className='barraNavegacaoMenu__opcaoFecharAbrir'>

                <span className='textoGrifadoMenu'>MENU</span>

              </div>

              <div className='barraNavegacaoMenu__opcoesDeNavegacao'>

                <Links className='opcaoHome'
                  to='/'
                  onClick={() => {
                    localStorage.setItem('caminho', 'home')
                  }}
                >
                  HOME
                </Links>
                <Links className='opcaoHome'
                  to='/'
                  onClick={() => {
                    localStorage.setItem('caminho', 'informacoes')
                  }}
                >
                  INFORMAÇÕES
                </Links>
                <Links className='opcaoHome'
                  to='/sobre-nos'
                >
                  SOBRE NÓS
                </Links>
                <Links className='opcaoHome'
                  to='/'
                  onClick={() => {
                    localStorage.setItem('caminho', 'catalogo')
                  }}
                >
                  CATEGORIAS
                </Links>
                <Links className='opcaoHome'
                  to='/'
                  onClick={() => {
                    localStorage.setItem('caminho', 'contatos')
                  }}
                >
                  CONTATOS
                </Links>


              </div>

            </div>

          </header>

        </section>

      </div>

    </>
  )
}

export default SobreNos