import Header from './partials/Header';
import Banner from './components/Banner';
import Categories from './partials/Categories';
import CardSection from './partials/CardSection';
import PartnerSection from './partials/PartnerSection';
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
        <CardSection />
        <PartnerSection />
        <section className='brands-section'>
          <Brands />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
