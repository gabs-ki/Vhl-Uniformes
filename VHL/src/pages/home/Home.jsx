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
import Macacao from './images/listaDeProdutos/macacao.svg'
import CamisaPolo from './images/listaDeProdutos/camisaPolo.svg'
import MangaLongaSocial from './images/listaDeProdutos/mangaLongaSocial.svg'
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/element/css/autoplay'

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function Home() {

    const swiper = new Swiper('.swiper', {

        modules: [Navigation, Pagination, Autoplay],

        autoplay: {
            delay: 5000,
        },

    });


    const [firstSwiper, setFirstSwiper] = useState(null)
    const [secondSwiper, setSecondSwiper] = useState(null)


    const [barraAberta, setBarraAberta] = useState(true)

    const [animacaoBarra, setAnimacaoBarra] = useState('')

    const [items, setItems] = useState(1, 2, 3)

    const [active, setActive] = useState(0)

    const [direction, setDirection] = useState('')

    const [arrayItems, setArrayItems] = useState([])

    const [images, setImages] = useState([Macacao, MangaLongaSocial, CamisaPolo])



    const Carousel = () => {

        var letArrayItems = []
        var level

        console.log(active)

        images.map((item, index) => {

            letArrayItems.push({ key: index, id: index, level: active, image: item })

        })

        setArrayItems(letArrayItems)
    }


    useEffect(() => {
        Carousel()
    }, [active])


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
                        <div className='informacoesHome'>

                            <img className='textoGrifadoHome' src={UniformesProfissionais} alt="" />

                            <p className='textoNormalHomeUm'>E MUITO MAIS</p>

                            <p className='textoNormalHomeDois'>Não perca tempo e faça já o seu pedido!</p>

                            <div className='botoesHome'>
                                <button className='botaoHomePrincipal'> ENTRE EM CONTATO </button>
                                <img className='botaoHomeSecundario' src={BotaoSecundarioHome} alt="" />
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

                        <div className='rede WhatsApp'><i class="fab fa-whatsapp"></i></div>
                        <div className='rede Facebook'><i class="fab fa-facebook-f"></i></div>
                        <div className='rede Instagram'><i class="fab fa-instagram"></i></div>

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
                            <button className='botaoAgendarVisita'>AGENDE UMA VISITA</button>

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
                        <swiper-container
                            slides-per-view="1"
                            navigation="true"
                            pagination="true"
                            scrollbar="true"
                            centeredSlides={true}
                            autoplay={100}
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

                        </swiper-container>


                    </div>
                </section>

                <img className='linhaTres' src={LinhaUm} alt="" />

                <section className="containerContatos" id='contatos'>

                    <img src={TituloContato} alt="" />

                    <div className='containerContatos__conteudoContatos'>
                        <span>Telefone: <a href=""><b>+55 (11) 3683-7002</b></a></span>
                        <span>E-Mail: <a href=""><b>vendas@vhluniformes.com</b></a></span>
                    </div>

                    <span>Endereço: <a href=""><b>Av. Francisco Lourenço da Costa, 612 - Vila do Conde, Barueri - SP, 06445-500</b></a></span>

                    <div className='conteudoContatos_conhecaNosMais'>

                        <div className='linhaContatosUm'></div>

                        <span>CONHEÇA-NOS MAIS:</span>

                        <div className='contatosRedes'>

                            <div className='icone Email'><i class="far fa-envelope"></i></div>
                            <div className='icone WhatsApp'><i class="fab fa-whatsapp"></i></div>
                            <div className='icone Facebook'><i class="fab fa-facebook-f"></i></div>
                            <div className='icone Instagram'><i class="fab fa-instagram"></i></div>

                        </div>

                        <div className='linhaContatosDois'></div>

                    </div>

                    <span>VHL UNIFORMES © 2024 Todos os direitos reservados</span>

                </section>

            </div>

        </>


    )
}

export default Home