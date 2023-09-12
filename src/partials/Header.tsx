import {
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

import './scss/Header.scss';

const Header = () => {
  return(
    <header className='header'>
      <ul className='benefits'>
        <li className='benefit-content'>
          <ShieldCheckIcon className='icon' />
          Compra <span className='benefit-detail'>100% segura</span>
        </li>
        <li className='benefit-content'>
          <TruckIcon className='icon' />
          <span className='benefit-detail'>Frete grátis </span> acima de R$ 200
        </li>
        <li className='benefit-content'>
          <CreditCardIcon className='icon' />
          <span className='benefit-detail'>Parcele </span >suas compras
        </li>
      </ul>

      <div className='search-bar'>
        <img src='../assets/.jpg' width={200} height={200} alt='Logo da página' />
        <div className='input-search'>
          <input type='text' placeholder='O que você está buscando?' />
          <MagnifyingGlassIcon className='input-icon' />
        </div>

        <ul className='navigation-bar'>
          
          <li>
            <HeartIcon className='icon' />
          </li>
          <li>
            <UserCircleIcon className='icon' />
          </li>
          <li>
            <ShoppingCartIcon className='icon' />
          </li>
        </ul>
      </div>

      <ul className='category-bar'>
        <li>
          <span>Todas as categorias</span>
        </li>
        <li>
          <span>Supermercado</span>
        </li>
        <li>
          <span>Livros</span>
        </li>
        <li>
          <span>Moda</span>
        </li>
        <li>
          <span>Lançamentos</span>
        </li>
        <li>
          <span>Ofertas do dia</span>
        </li>
        <li>
          <StarIcon className='icon' />
          <span>Assinatura</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;