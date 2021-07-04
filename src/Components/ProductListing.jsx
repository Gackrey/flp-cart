import { Product } from "./Product";
import { useCart } from "../Context/CartContext";
export function ProductListing() {
  const { Products } = useCart();

  return (
    <div>
      <div className="all-prod">
        {Products.length > 0 ? (
          Products.map((prod) => <Product wholeProd={prod} />)
        ) : (
          <h1>No products found</h1>
        )}
      </div>
    </div>
  );
}
