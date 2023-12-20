import React, { useEffect, useState } from 'react'
import './styleHome.css'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import BackgroundHome from './images/backgroundHome.svg'
import ImagemTesteUm from './images/imagemTesteUm.svg'
import ImagemTesteDois from './images/imagemTesteDois.svg'
import ImagemTesteTres from './images/imagemTesteTres.svg'

function Home() {

    const [barraAberta, setBarraAberta] = useState(false)

    return (


        <>

            {
                barraAberta == false ? (
                    null
                ) : (

                    <div className='barraNavegacaoMenu'>

                        <div className='barraNavegacaoMenu__opcaoFecharAbrir'>
                            <span className='textoGrifadoMenu'>MENU</span>

                            <i onClick={() => {
                                setBarraAberta(!barraAberta)
                            }} className='iconeFecharbarrar'>{
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5492 16.037C16.2814 15.3047 17.4686 15.3047 18.2008 16.037L44.4629 42.299C45.1951 43.0313 45.1951 44.2185 44.4629 44.9508C43.7306 45.683 42.5436 45.683 41.8114 44.9508L15.5492 18.6886C14.8169 17.9564 14.8169 16.7692 15.5492 16.037Z" fill="#5A5A5A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.4631 16.037C45.1954 16.7692 45.1954 17.9564 44.4631 18.6886L18.2008 44.9505C17.4686 45.6827 16.2814 45.6827 15.5492 44.9505C14.8169 44.2182 14.8169 43.031 15.5492 42.2987L41.8116 16.0369C42.5439 15.3047 43.7309 15.3047 44.4631 16.037Z" fill="black" />
                                </svg>
                            }</i>
                        </div>

                        <div className='barraNavegacaoMenu__opcoesDeNavegacao'>
                            <span className='opcaoHome'>HOME</span>
                           

                        </div>

                    </div>

                )
            }

            <img className='containerHome__backgroundHome' src={BackgroundHome} alt="" />

            <div className="containerHome">

                <header className='containerHome__cabecalhoHome'>

                    <img className='logoHome' src={LogoVHL} alt="" />

                    <i onClick={() => {
                        setBarraAberta(!barraAberta)
                    }} className='iconeMenuHome'>

                        <img src={MenuIcon} alt="" />

                    </i>



                </header>

                <div className='bordaGradienteHome'></div>

                <section className='containerHome__secaoInicialHome'>

                    <div className="secaoInicialHome__informacoesHome">

                        <div>

                            <h1 className='tituloHome'>
                                NOSSA EMPRESA É ESPECIALIZADA EM UNIFORMES <b className='textoGrifadoHome'>PROFISSIONAIS E PERSONALIZADOS</b> E MUITO MAIS!

                            </h1>

                            <p className='descricaoHome'>
                                Entre em contato e faça seu orçamento já!
                            </p>

                        </div>

                        <button className='botaoContatoHome'>
                            <b className='textoBotaoContatoHome'>ENTRE EM CONTATO</b>
                        </button>

                    </div>

                    <div className="secaoInicialHome__imagensHome">

                        <div className='backgroundeImageHomeUm'>
                            <img className='imagemHomeUm' src={ImagemTesteUm} alt="" />
                        </div>

                        <div className='backgroundeImageHomeDois'>
                            <img className='imagemHomeDois' src={ImagemTesteDois} alt="" />
                        </div>

                        <div className='backgroundeImageHomeTres'>
                            <img className='imagemHomeTres' src={ImagemTesteTres} alt="" />
                        </div>

                    </div>

                </section>


            </div>


        </>


    )
}

export default Home