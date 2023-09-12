import './scss/Category-card.scss';

interface Props {
  icon: string,
  description: string
}

const CategoryCard = ({icon, description}: Props) => {
  return(
    <ul className='products-category'>
      <li className='product-list'>
        <div className='product-icon'>
          <i className={icon}></i>
        </div>

        <span className='category-description'>
          {description}
        </span>
      </li>
    </ul>
  );
}

export default CategoryCard;