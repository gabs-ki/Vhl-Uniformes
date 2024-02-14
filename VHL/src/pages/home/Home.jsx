import React, { useEffect, useState, useRef } from 'react'
import './styleHome.css'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import BackgroundHome from './images/backgroundHome.svg'
import LinhaUm from './images/linhaUm.svg'
import UniformesProfissionais from './images/uniformesProfissionais.svg'
import BotaoSecundarioHome from './images/botaoSecundarioHome.svg'
import ImagensIlustrativasHome from './images/imagensIlustrativasHome.svg'
import IndicadorHome from './images/indicadorHome.svg'
import DecoracaoHomeUm from './images/decoracaoHomeUm.svg'
import DecoracaoHomeDois from './images/decoracaoHomeDois.svg'
import TituloPrimeiroParagrafo from './images/tituloPrimeiroParagrafo.svg'
import HomemPrimeiroParagrafo from './images/homemPrimeiroParagrafo.svg'
import TituloSegundoParagrafo from './images/tituloSegundoParagrafo.svg'
import HomemSegundoParagrafo from './images/homemSegundoParagrafo.svg'
import DecoracaoInformacoesUm from './images/decoracaoInformacoesUm.svg'
import DecoracaoInformacoesDois from './images/decoracaoInformacoesDois.svg'
import DecoracaoInformacoesTres from './images/decoracaoInformacoesTres.svg'
import DecoracaoInformacoesQuatro from './images/decoracaoInformacoesQuatro.svg'
import TituloContato from './images/tituloContatos.svg'
import FundoCatalogo from './images/fundoCatalogo.svg'
import TituloCatalogo from './images/tituloCatalogo.svg'
import '../home/carousel.scss'
import Macacao from './images/listaDeProdutos/macacao2.svg'
import CamisaPolo from './images/listaDeProdutos/camisetaPolo2.svg'
import MangaLongaSocial from './images/listaDeProdutos/camisaSocial2.svg'
import BotaoDireita from './images/botaoDireita.svg'
import BotaoEsquerda from './images/botaoEsquerda.svg'
import SetaCategoria from './images/setaCategoria.svg'

import { Link, animateScroll as scroll } from "react-scroll";

function Home() {

    const [barraAberta, setBarraAberta] = useState(true)

    const [animacaoBarra, setAnimacaoBarra] = useState('')

    const [items, setItems] = useState(1, 2, 3)

    const [active, setActive] = useState(1)

    const [direction, setDirection] = useState('')

    const [arrayItems, setArrayItems] = useState([])

    const [images, setImages] = useState([
        { img: Macacao, desc: 'Uniformes Profissionais', link: 'https://api.whatsapp.com/send?phone=5511947850224&text=Bom%20dia!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Uniformes%20Profissionais.' },
        { img: MangaLongaSocial, desc: 'Uniformes Sociais', link: 'https://api.whatsapp.com/send?phone=5511947850224&text=Bom%20dia!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Uniformes%20Sociais.' },
        { img: CamisaPolo, desc: 'Camiseta Personalizadas', link: 'https://api.whatsapp.com/send?phone=5511947850224&text=Bom%20dia!%20Gostaria%20de%20saber%20mais%20sobre%20as%20Camisetas%20Personalizadas.' }
    ])

    const Carousel = () => {

        var letArrayItems = []
        var level

        console.log(images)

        images.map((item, index) => {
            console.log(item)
            letArrayItems.push({ image: item.img, categoria: item.desc, link: item.link })

        })

        setArrayItems(letArrayItems)
    }


    useEffect(() => {
        Carousel()

    }, [active])

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            CliqueDireito()
        }, 4000);


        return () => clearTimeout(timeoutId);
    })

    const CliqueEsquerdo = () => {

        const letArrayItems = [...arrayItems]

        letArrayItems.map((item, index) => {
            if (index == arrayItems.length - 1) {
                var itemSplice = letArrayItems.splice(index, 1)
                letArrayItems.unshift(itemSplice[0])

            }
        })

        setArrayItems(letArrayItems)
    }

    const CliqueDireito = () => {
        const letArrayItems = [...arrayItems]

        letArrayItems.map((item, index) => {
            if (index == arrayItems.length - 3) {
                var itemSplice = letArrayItems.splice(index, 1)
                letArrayItems.push(itemSplice[0])
                console.log(letArrayItems)
            }
        })

        setArrayItems(letArrayItems)
    }

    useEffect(() => {

    }, [])

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

                                <Link className='opcaoHome'
                                    to='home'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    HOME
                                </Link>
                                <Link className='opcaoHome'
                                    to='informacoes'
                                    spy={true}
                                    smooth={true}
                                    offset={90}
                                    duration={500}
                                >
                                    INFORMAÇÕES
                                </Link>
                                <Link className='opcaoHome'
                                    to='catalogo'
                                    spy={true}
                                    smooth={true}
                                    offset={90}
                                    duration={500}
                                >
                                    CATEGORIAS
                                </Link>
                                <Link className='opcaoHome'
                                    to='contatos'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    CONTATOS
                                </Link>


                            </div>

                        </div>

                    </header>

                    <div className="fundoColoridoHome">
                        <div className='informacoesHome'>

                            <img className='textoGrifadoHome' src={UniformesProfissionais} alt="" />

                            <p className='textoNormalHomeUm'>E MUITO MAIS</p>

                            <p className='textoNormalHomeDois'>Não perca tempo e faça já o seu pedido!</p>

                            <div className='botoesHome'>
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=5511947850224"><button className='botaoHomePrincipal'> ENTRE EM CONTATO </button></a>
                                <Link
                                    to='catalogo'
                                    spy={true}
                                    smooth={true}
                                    offset={100}
                                    duration={500}
                                ><img className='botaoHomeSecundario' src={BotaoSecundarioHome} alt="" /></Link>
                            </div>

                        </div>

                        <img className='decoracaoHomeUm' src={DecoracaoHomeUm} alt="" />

                        <img className='decoracaoHomeDois' src={DecoracaoHomeDois} alt="" />

                        <img className='indicadorHome' src={IndicadorHome} alt="" />

                        <img className='imagensIlustrativaHome' src={ImagensIlustrativasHome} alt="" />

                    </div>

                    <div className='redesSociaisHome'>

                        <div className='linhaRedesUm'></div>

                        <span className='conhecaRedes'>CONHEÇA-NOS MAIS</span>

                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5511947850224"><div className='rede WhatsApp'><i class="fab fa-whatsapp"></i></div></a>
                        {/* <a href=""><div className='rede Facebook'><i class="fab fa-facebook-f"></i></div></a> */}
                        {/* <a href=""><div className='rede Instagram'><i class="fab fa-instagram"></i></div></a> */}

                        <div className='linhaRedesDois'></div>

                    </div>

                </section>

                <img className='linhaUm' src={LinhaUm} alt="" />

                <section className="containerInformacoes" id='informacoes'>

                    <div className='containerInformacoes__conteudoIdeias'>

                        <div className='conteudoIdeias'>

                            <img className='tituloIdeias' src={TituloPrimeiroParagrafo} alt="" />
                            <div className='linhaInformacoesUm'></div>
                            <p className='textoInformacoesUm'>A VHL Uniformes é uma empresa de confecção de uniformes profissionais para todos os segmentos, e vem se solidificando no mercado. Nos dedicamos à Confiança, Agilidade, Transparência, Qualidade, Respeito e Compromisso.</p>

                        </div>

                        <img className='homemPrimeiroParagrafo' src={HomemPrimeiroParagrafo} alt="" />

                    </div>

                    <div className='containerInformacoes__conteudoVisita'>

                        <img className='homemSegundoParagrafo' src={HomemSegundoParagrafo} alt="" />

                        <div className='conteudoVisita'>

                            <img src={TituloSegundoParagrafo} alt="" />
                            <div className='linhaVisitaUm'></div>
                            <p className='textoInformacoesVisita'>Para colabores e clientes que estão perto de nós, podemos fazer uma visita!</p>
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=5511947850224"><button className='botaoAgendarVisita'>AGENDE UMA VISITA</button></a>

                        </div>

                    </div>

                    <img className='decoracaoInformacoesUm' src={DecoracaoInformacoesUm} alt="" />

                    <img className='decoracaoInformacoesDois' src={DecoracaoInformacoesDois} alt="" />

                    <img className='decoracaoInformacoesTres' src={DecoracaoInformacoesTres} alt="" />

                    <img className='decoracaoInformacoesQuatro' src={DecoracaoInformacoesQuatro} alt="" />

                </section>

                <img className='linhaDois' src={LinhaUm} alt="" />

                <section className='containerCatalogo' id='catalogo'>
                    <img className='imagemFundoCatalogo' src={FundoCatalogo} alt="" />

                    <div className='containerCatalogo__tituloCatalogo'>
                        <img className='tituloCatalogo' src={TituloCatalogo} alt="" />
                    </div>

                    <div className='containerCatalogo__listaDeProdutos'>
                        {/* <swiper-container
                            slides-per-view="1"
                            navigation="true"
                            pagination="true"
                            scrollbar="true"
                            
                            autoplay="1000"
                            
                        >
                            {
                                arrayItems.map((item, index) => (

                                    <swiper-slide data-swiper-autoplay="2000">
                                        <div className='image'>
                                            <img className='image-post' src={item.image} alt="" />
                                        </div>
                                    </swiper-slide>

                                ))
                            }

                        </swiper-container> */}

                        <div className='listaItems'>
                            <i className='botaoEsquerda'
                                onClick={() => {

                                    CliqueEsquerdo()

                                }}>
                                <img src={BotaoEsquerda} alt="" />
                            </i>

                            {

                                arrayItems.map((item, index) => {
                                    if (index == active) {

                                        return (
                                            <div className='item'>
                                                <span className='tituloCategoriaProdutos'>
                                                    <img src={SetaCategoria} alt="" />
                                                    {item.categoria}
                                                </span>
                                                <img className='imageActive' src={item.image} alt="" />
                                                <a target='_blank' href={item.link}>
                                                    <div className='botaoItem'>PEÇA JÁ</div>
                                                </a>
                                            </div>
                                        )

                                    } else {
                                        return (
                                            <div>
                                                <img className='imageInactive' src={item.image} alt="" />
                                            </div>
                                        )
                                    }
                                })

                            }

                            <i className='botaoDireita'
                                onClick={() => {

                                    // var newActive = active + 1

                                    // if(newActive >= arrayItems.length) {
                                    //     setActive(0)
                                    // } else {
                                    //     setActive(newActive)
                                    // }

                                    CliqueDireito()


                                }}
                            >
                                <img src={BotaoDireita} alt="" />
                            </i>
                        </div>

                    </div>
                </section>

                <img className='linhaTres' src={LinhaUm} alt="" />

                <section className="containerContatos" id='contatos'>

                    <img src={TituloContato} alt="" />

                    <div className='containerContatos__conteudoContatos'>
                        <span>Telefone: <a target='_blank' href="https://www.sejda.com/call/01136837002"><b>+55 (11) 3683-7002</b></a></span>
                        <span>E-Mail: <a target='_blank' href=""><b>vendas@vhluniformes.com</b></a></span>
                    </div>

                    <span>Endereço: <a target='_blank' href="https://www.google.com/maps/place/Av.+Francisco+Louren%C3%A7o+da+Costa,+612+-+Vila+do+Conde,+Barueri+-+SP,+06445-500/@-23.5322834,-46.8658102,19z/data=!3m1!4b1!4m5!3m4!1s0x94cf010ab5c34e1f:0xba89a5a05f4ed05d!8m2!3d-23.5322846!4d-46.8651651?entry=ttu"><b>Av. Francisco Lourenço da Costa, 612 - Vila do Conde, Barueri - SP, 06445-500</b></a></span>

                    <div className='conteudoContatos_conhecaNosMais'>

                        <div className='linhaContatosUm'></div>

                        <span>CONHEÇA-NOS MAIS:</span>

                        <div className='contatosRedes'>

                            <a target='_blank' href="mailto:vendas@vhluniformes.com"><div className='icone Email'><i class="far fa-envelope"></i></div></a>
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=5511947850224"><div className='icone WhatsApp'><i class="fab fa-whatsapp"></i></div></a>
                            {/* <div className='icone Facebook'><i class="fab fa-facebook-f"></i></div> */}
                            {/* <div className='icone Instagram'><i class="fab fa-instagram"></i></div> */}

                        </div>

                        <div className='linhaContatosDois'></div>

                    </div>

                    <span><b>VHL UNIFORMES © 2024</b> Todos os direitos reservados</span>

                </section>

            </div>

        </>


    )
}

export default Home