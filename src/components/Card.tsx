import './scss/Card.scss';

interface Props {
  photo: any
  description: string
  oldPrice: string
  price: string
}

const Card = ({photo, description, oldPrice, price}: Props) => {
  return(
    <>
      <article className='card'>
        <img src={photo} alt='Foto ilustrativa do produto' />
        <p className='card-description'>{description}.</p>

        <span className='old-price'>{oldPrice}</span>
        <span className='new-price'>{price}</span>
        <span className='installments-price'>ou 2x de R$ 49,95 sem juros</span>
        <span className='frete'>Frete grátis</span>

        <button className='button'>Comprar</button>
      </article>
    </>
  );
}

export default Card;