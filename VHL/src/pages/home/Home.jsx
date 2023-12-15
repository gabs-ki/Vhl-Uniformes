import React from 'react'
import './styleHome.css'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import BackgroundHome from './images/backgroundHome.svg'
import ImagemTesteUm from './images/imagemTesteUm.svg'
import ImagemTesteDois from './images/imagemTesteDois.svg'
import ImagemTesteTres from './images/imagemTesteTres.svg'

function Home() {
    return (


        <>

            <img className='containerHome__backgroundHome' src={BackgroundHome} alt="" />

            <div className="containerHome">

                <header className='containerHome__cabecalhoHome'>

                    <img className='logoHome' src={LogoVHL} alt="" />

                    <i className='iconeMenuHome'>

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