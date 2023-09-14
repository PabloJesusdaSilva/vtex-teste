import { ChevronRightIcon } from '@heroicons/react/24/outline'

import './scss/Brands.scss';

const Brands = () => {
  return(
    <article className='article-brands'>
      <h3>Navegue por marcas</h3>

      <div className='brands'>
        <div className='logo'/>
        <div className='logo'/>
        <div className='logo'/>
        <div className='logo'/>
        <div className='logo'/>
        <div className='logo'/>

        <button className='button-icon'>
          <ChevronRightIcon className='icon' />
        </button>
      </div>
    </article>
  )
}

export default Brands;