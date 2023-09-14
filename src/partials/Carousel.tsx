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

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsForPage = 4;

  const pages = Math.ceil(products.length / itemsForPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pages) % pages)
  }

  useEffect(() => {
    axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => setProducts(response.data.products))
  },[])

  return(
    <>
      <div className='carousel-cards'>
        <ChevronLeftIcon className='arrow-left' onClick={prevSlide} />
        <div className='cards'>
          {
            products.length > 0 
            ? (
                products.slice(currentIndex * itemsForPage, (currentIndex + 1) * itemsForPage).map(prod => (
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
        <ChevronRightIcon className='arrow-right' onClick={nextSlide} />
      </div>
    </>
  );
}

export default ProductCards;