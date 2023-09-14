import Carousel from './Carousel';

import './scss/CardSection.scss';

const CardSection = () => {
   return(
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
   );
}

export default CardSection;