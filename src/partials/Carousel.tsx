import axios from 'axios';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import Card from '../components/Card';

import './scss/Carousel.scss';

interface Product {
  id: any
  photo: any
  descriptionShort: string
  oldPrice: string
  price: string
}

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => setProducts(response.data.products))
  },[])

  return(
    <>
    <div className='carousel-cards'>
      <ChevronLeftIcon className='arrow-left' />
      <div className='cards'>
          {
            products.length > 0 
            ? (
                products.map(prod => (
                  <Card
                    key={prod.id}
                    photo={prod.photo}
                    description={prod.descriptionShort}
                    oldPrice=' 7.000'
                    price={prod.price}
                  />
                ))
              ) 
            : <p>Carregando produtos...</p>
          }
        </div>
        <ChevronRightIcon className='arrow-right' />
      </div>
    </>
  );
}

export default ProductCards;