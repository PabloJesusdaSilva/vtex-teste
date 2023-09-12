import './scss/Banner.scss';

const Banner = () => {
  return(
    <div className='banner'>
      <div className='shadow'/>
      <h1 className='banner-title'>Venha conhecer as nossa promoções</h1>
      <h2 className='banner-subtitle'>50% Off nos produos</h2>

      <button className='banner-button'>
        Ver produtos
      </button>
    </div>
  );
}

export default Banner;