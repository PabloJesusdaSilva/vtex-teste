import { XMarkIcon } from '@heroicons/react/24/outline';

import './scss/ModalCard.scss';

interface Props {
   handleClose: any | void
   image: any
   title: string
   price: string
}

const ModalCard = ({ handleClose, image, title, price }: Props) => {
   return(
      <article className='modal-card'>
         <div className='modal-image'>
            <img src={image} alt='imagem do produto selecionado' />
         </div>

         <XMarkIcon className='icon-to-close' onClick={handleClose}/>

         <div className='modal-description'>
            <h2 className='card-title'>{title}</h2>
            <span className='card-price'>R$ {price}</span>

            <p className='card-description'>Many desktop publishing packages and web page editors now many desktop publishing</p>

            <span className='card-detail'>Veja mais detalhes do produto &gt;</span>

            <div className='card-counter'>
               <span className='subtraction'>-</span>
               <span className='current-value'>1</span>
               <span className='addition'>+</span>
            </div>

            <button className='card-button' onClick={handleClose}>Comprar</button>
         </div>
      </article>
   );
}

export default ModalCard;