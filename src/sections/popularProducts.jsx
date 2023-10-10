import PopularProductsCard from "../component/popularProductsCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="section">
      <div className="flex flex-col justify-start gap-6">
        <h2 className="capitalize font-palanquin font-semibold text-4xl">
          our <span className="text-coral-red">popular</span> products
        </h2>
        <p className=" font-Roboto text-slate-gray ">
          Welcome to our shoe shop, where style meets comfort. Explore our
          diverse collection of shoes designed to suit every occasion. From
          casual sneakers to elegant heels, we have something for everyone. Find
          the perfect fit and step out in confidence with our high-quality
          footwear.
        </p>
      </div>
      <div
        className="grid  wide:grid-cols-5 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14"
        
      >
        {products.map(product => (
          <PopularProductsCard key={product.name} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
