import {
  CustomerReview,
  Hero,
  Footer,
  SpecialOffer,
  SuperQuantity,
  Subscribe,
  PopularProducts,
  Nav,
} from "./sections";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l  wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuantity />
    </section>
    <section className="py-10 padding-x">
      <service />
    </section>
    <section className="padding bg-pale-blue">
      <SpecialOffer />
    </section>
    <section className="padding">
      <CustomerReview />
    </section>
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe />
    </section>
    <section className="pb-8 bg-black padding-x padding-t">
      <Footer />
    </section>
  </main>
);

export default App;
