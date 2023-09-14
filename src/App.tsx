import Header from './partials/Header';
import Banner from './components/Banner';
import Carousel from './partials/Carousel';
import Categories from './partials/Categories';
import PartnerCard from './components/PartnerCard';
import ProductCard from './components/ProductCard';
import Brands from './components/Brands';
import Footer from './partials/Footer';

import './scss/App.scss';

const App = () => {
  return(
    <>
      <Header />

      <main>
        <Banner />
        <Categories />

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

          <Carousel />
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

      <Footer />
    </>
  );
}

export default App;
