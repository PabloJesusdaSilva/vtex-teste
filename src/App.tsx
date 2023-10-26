import Header from './partials/Header/Header';
import Footer from './partials/Footer/Footer';
import Categories from './partials/Categories/Categories';
import CardSection from './partials/CardSection/CardSection';
import PartnerSection from './partials/PartnerSection/PartnerSection';

import Banner from './components/Banner/Banner';
import Brands from './components/Brands/Brands';

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
