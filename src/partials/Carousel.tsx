import axios from 'axios';
import { useState, useEffect } from 'react';

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
    </>
  );
}

export default ProductCards;