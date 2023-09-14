import { useState } from 'react';

import ModalCard from './ModalCard';

import './scss/Card.scss';

interface Props {
  photo: any
  description: string
  oldPrice: string
  price: string
}

const root = document.querySelector('#root');
const shadow = document.createElement('div');

const Card = ({photo, description, oldPrice, price}: Props) => {
  const [openModal, setOpenModal] = useState(false);
  root?.appendChild(shadow)

  const handleOpenModal = (): void => {
    setOpenModal(!openModal);
    shadow.classList.add('shadow-box');
  }
  
  const handleCloseModal = (): void => {
    setOpenModal(!openModal);
    shadow.classList.remove('shadow-box');
  }

  return(
    <>
      <article className='card'>
        <img src={photo} alt='Foto ilustrativa do produto' />
        <p className='card-description'>{description}.</p>

        <span className='old-price'>R$ {oldPrice}</span>
        <span className='new-price'>R$ {price}</span>
        <span className='installments-price'>ou 2x de R$ 49,95 sem juros</span>
        <span className='frete'>Frete grátis</span>

        <button className='button' onClick={handleOpenModal}>Comprar</button>

        {
          openModal 
            ? <ModalCard 
                handleClose={handleCloseModal}
                image={photo}
                title={description}
                price={price}
              />
            : ''
        }
      </article>
    </>
  );
}

export default Card;