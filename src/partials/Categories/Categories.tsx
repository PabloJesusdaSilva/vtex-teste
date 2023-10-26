import CategoryCard from '../../components/CategoryCard/CategoryCard';

import './scss/Categories.scss';

const Categories = () => {
   return(
      <section className='categories'>
         <CategoryCard icon='fa-solid fa-laptop' description='Tecnologia' />
         <CategoryCard icon='fa-solid fa-shop' description='Supermercado' />
         <CategoryCard icon='fa-solid fa-wine-bottle' description='Bebidas' />
         <CategoryCard icon='fa-solid fa-screwdriver-wrench' description='Ferramentas' />
         <CategoryCard icon='fa-solid fa-heart-circle-check' description='Saúde' />
         <CategoryCard icon='fa-solid fa-person-running' description='Esporte e Fitness' />
         <CategoryCard icon='fa-solid fa-shirt' description='Moda' />
      </section>
   );
}

export default Categories;