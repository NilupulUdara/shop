import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");
  
  const products = [
  { "id": 1, "name": "Product 1 ", "price": 149, "image": "/assets/images/1001.png"},
  { "id": 2, "name": "Product 2", "price": 49, "image": "/assets/images/1002.png" },
  { "id": 3, "name": "Product 3", "price": 179, "image": "/assets/images/1003.png"},
  { "id": 4, "name": "Product 4", "price": 39, "image": "/assets/images/1004.png"},
  { "id": 5, "name": "Product 5", "price": 199, "image": "/assets/images/1005.png"},
  { "id": 6, "name": "Product 5", "price": 29, "image": "/assets/images/1006.png"}
  ];

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
        </div>
      </section>
    </main>
  )
}
