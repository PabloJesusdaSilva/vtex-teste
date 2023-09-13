import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import Header from './partials/Header';
import Banner from './components/Banner';
import CategoryCard from './components/Category-card';
import Card from './components/Card';
import PartnerCard from './components/Partner';
import ProductCard from './components/Product';
import Brands from './components/Brands';

import './scss/App.scss';

interface Product {
  id: any
  photo: any
  descriptionShort: string
  oldPrice: string
  price: string
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const carousel = useRef(null);

  useEffect(() => {
    axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => response.data)
      .then(data => {
        setProducts(data.products)
      })
  },[])

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    console.log(carousel)
  }
  
  const handleRightClick = (e: any) => {
    e.preventDefault()
  }

  return(
    <>
      <Header />

      <main>
        <Banner />
        <section className='categories'>
          <CategoryCard icon='fa-solid fa-laptop' description='Tecnologia' />
          <CategoryCard icon='fa-solid fa-shop' description='Supermercado' />
          <CategoryCard icon='fa-solid fa-wine-bottle' description='Bebidas' />
          <CategoryCard icon='fa-solid fa-screwdriver-wrench' description='Ferramentas' />
          <CategoryCard icon='fa-solid fa-heart-circle-check' description='Saúde' />
          <CategoryCard icon='fa-solid fa-person-running' description='Esporte e Fitness' />
          <CategoryCard icon='fa-solid fa-shirt' description='Moda' />
        </section>

        <section className='products-cards'>
          <div className='product-title'>
            <hr className='title-bar' />
            <h2 className='title-section'>Produtos Selecionados</h2>
            <hr className='title-bar' />
          </div>

          <table className='related-products' rules='all' border={1} cellSpacing={1}>
            <tr>
              <td>Celular</td>
              <td>Acessórios</td>
              <td>Tablets</td>
              <td>Notebooks</td>
              <td>TVS</td>
              <td>Ver todos</td>
            </tr>
          </table>

          <div className='carousel' ref={carousel}>
            <ArrowLeftIcon className='arrow-left' onClick={handleLeftClick} />

            <div className='cards'>
              {
                products.length > 0 
                ? (
                    products.map(prod => (
                      <Card
                        key={prod.id}
                        photo={prod.photo}
                        description={prod.descriptionShort}
                        oldPrice={prod.oldPrice}
                        price={prod.price}
                      />
                    ))
                  ) 
                : <p>Carregando produtos...</p>
              }
             </div> 

            <ArrowRightIcon className='arrow-right' onClick={handleRightClick} />
          </div>
        </section>

        <section className='partner-section'>
          <div className='partner-cards'>
            <PartnerCard />
            <PartnerCard />
          </div>

          <div className='product-title'>
            <hr className='title-bar' />
            <h2 className='title-section'>Produtos Selecionados</h2>
            <hr className='title-bar' />
          </div>

          <div>
            <span className='product-subtitle'>Ver todos</span>
          </div>

          <div className='products-card'>
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        <section className='brands-section'>
          <Brands />
        </section>
      </main>
    </>
  );
}

export default App;
