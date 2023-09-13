import './scss/Product.scss';

const Product = () =>{
  return(
    <article className='product-card'>
      <div className='shadow' />
      <h4 className='card-title'>Parceiros</h4>
      <p className='card-description'>Lorem ipsum dolor sit amet, consectetur</p>

      <button className='card-button'>Confira</button>
    </article>
  );
}

export default Product;