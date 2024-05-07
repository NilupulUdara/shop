
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const products = [
    { "id": 1, "name": "Product 1 ", "price": 149, "image": "/assets/images/1001.png" },
    { "id": 2, "name": "Product 2", "price": 49, "image": "/assets/images/1002.png" }
  ];

  return (
    <main>
      <section>
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))
        }
      </section>
    </main>
  )
}
