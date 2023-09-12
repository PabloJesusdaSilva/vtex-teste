import Header from './partials/Header';
import Banner from './components/Banner';
import CategoryCard from './components/Category-card';

import './scss/App.scss';

const App = () => {
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
        </section>
      </main>
    </>
  );
}

export default App;
