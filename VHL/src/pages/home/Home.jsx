import React, { useEffect, useState, useRef } from 'react'
import './styleHome.css'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import BackgroundHome from './images/backgroundHome.svg'
import LinhaUm from './images/linhaUm.svg'


function Home() {

    const [barraAberta, setBarraAberta] = useState(false)

    const [animacaoBarra, setAnimacaoBarra] = useState('')

    

    return (


        <>

            <div className='containerGeral'>

                <img className='containerHome__backgroundHome' src={BackgroundHome} alt="" />

                <section className="containerHome" id='home'>

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
                                <span className='opcaoHome'>HOME</span>


                            </div>

                        </div>


                    </header>

                    <div className="fundoColoridoHome">

                    </div>

                </section>

                <img className='linhaUm' src={LinhaUm} alt="" />

                <section className="containerInformacoes" id='informacoes'>

                </section>

                <img className='linhaDois' src={LinhaUm} alt="" />

                <section className='containerCatalogo' id='catalogo'>

                </section>

                <img className='linhaTres' src={LinhaUm} alt="" />

                <section className="containerContatos" id='contatos'>

                </section>

            </div>

        </>


    )
}

export default Home