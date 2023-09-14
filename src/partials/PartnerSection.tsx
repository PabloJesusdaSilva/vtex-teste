import PartnerCard from '../components/PartnerCard';
import ProductCard from '../components/ProductCard';

import './scss/PartnerSection.scss';

const PartnerSection = () => {
   return(
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
   );
}

export default PartnerSection;