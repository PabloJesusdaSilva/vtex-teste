import './scss/Footer.scss';

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer-description'>
        <article className='footer-about'>
          <h4 className='footer-title'>
            Sobre nós
          </h4>
          <p className='information-text'>conheça</p>
          <p className='information-text'>indicação e desconto</p>

          <ul className='icons'>
            <li>
              <i className='fa-brands fa-facebook' />
            </li>
            <li>
              <i className='fa-brands fa-instagram' />
            </li>
            <li>
              <i className='fa-brands fa-youtube' />
            </li>
          </ul>
        </article>

        <article className='footer-information'>
          <h4 className='footer-title'>
            Informações úteis
          </h4>

          <p className='information-text'>Fale conosco</p>
          <p className='information-text'>Dúvidas</p>
          <p className='information-text'>Prazo de entrega</p>
          <p className='information-text'>Forma de pagamento</p>
          <p className='information-text'>Política  de privacidade</p>
          <p className='information-text'>Trocas e devoluções</p>
        </article>

        <article className='footer-payment'>
          <h4 className='footer-title'>
            Formas de pagamento
          </h4>
          <div className='payment' />
        </article>

        <form className='footer-form'>
          <span className='form-subtitle'>Cadastra-se e receba nossas</span>
          <h3 className='form-title'>Novidades e promoções</h3>
          <p className='form-description'>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
          </p>
          <div>
            <input className='form-input' type='text' />
            <button className='form-button'>ok</button>
          </div>
        </form>
      </div>

      <div className='footer-copyright'>
        <p className='copyright-description'>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </p>

        <div className='footer-partnership' />
      </div>
    </footer>    
  );
}

export default Footer;