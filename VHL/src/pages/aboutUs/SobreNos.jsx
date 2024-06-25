import React, { useState } from 'react'
import './styleSobreNos.css'
import BackgroundHome from './images/backgroundHome.svg'
import LogoVHL from './images/logoVHL.svg'
import MenuIcon from './images/menuIcon.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Links } from 'react-router-dom'
import SobreNosTitulo from './images/sobreNosTitulo.svg'
import SeparadorTitulo from './images/separadorTitulo.svg'
import IconeVisao from './images/iconeVisao.svg'
import IconeMissao from './images/iconeMissao.svg'
import IconeValores from './images/iconeValores.svg'
import TituloContato from './images/tituloContatos.svg'
import LinhaUm from './images/linhaUm.svg'


function SobreNos() {

  const [barraAberta, setBarraAberta] = useState(true)

  return (
    <>

      <div className="containerSobreNos">

        <img className='containerHome__backgroundHome' src={BackgroundHome} alt="" />

        <section className='secaoCabecalhoSobreNos'>

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

        <section className='secaoConteudoSobreNos'>

          <img className='secaoConteudoSobreNos__tituloSobreNos' src={SobreNosTitulo} alt="" />

          <img className='secaoConteudoSobreNos__separadorSobreNos' src={SeparadorTitulo} alt="" />

          <div className='containerInformacoesSobreNos'>

            <div className='containerInformacoesSobreNos__conteudoVisao'>

              <div className='iconeVisao'>
                <img src={IconeVisao} alt="" />
                <span className='tituloVisao'>Visão</span>
              </div>

              <p className='textoVisao'>Visamos ser reconhecidos como líderes no setor de uniformes, oferecendo soluções inovadoras e atendendo às necessidades de nossos clientes com excelência.</p>

            </div>

            <div className='containerInformacoesSobreNos__conteudoMissao'>

              <div className='iconeMissao'>
                <img src={IconeMissao} alt="" />
                <span className='tituloMissao'>Missão</span>
              </div>

              <p className='textoMissao'>Nossa missão é fornecer uniformes de alta qualidade que transmitam a identidade e o profissionalismo de nossos clientes. Buscamos ser referência no mercado, oferecendo produtos e serviços que superem as expectativas.</p>

            </div>

            <div className='containerInformacoesSobreNos__conteudoValores'>

              <div className='iconeValores'>
                <img src={IconeValores} alt="" />
                <span className='tituloValores'>Valores</span>
              </div>

              <p className='textoValores'>Nossos valores fundamentais incluem qualidade, comprometimento, ética e parceria. Acreditamos em estabelecer relacionamentos de longo prazo com nossos clientes e fornecedores, baseados na confiança.</p>

            </div>

          </div>

        </section>

        <img className='linhaUmSobreNos' src={LinhaUm} alt="" />

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

export default SobreNos