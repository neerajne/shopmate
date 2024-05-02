import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";
export const Cart = () => {

  useTitle("Cart");
  const products  = useSelector((state) =>(state.cartState));

  return (
    <main>
      <section className="cart"> 
        <h1>Cart Items: {products.length} / ${products.total}</h1>
        { ( products.cartList).map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
