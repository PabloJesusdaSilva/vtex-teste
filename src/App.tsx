import Header from './partials/Header';
import Footer from './partials/Footer';
import Categories from './partials/Categories';
import CardSection from './partials/CardSection';
import PartnerSection from './partials/PartnerSection';

import Banner from './components/Banner';
import Brands from './components/Brands';

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
