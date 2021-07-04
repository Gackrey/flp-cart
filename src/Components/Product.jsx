import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";
export function Product({ wholeProd }) {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={wholeProd.Image} alt="product" />
      <h2 className="brand_name">{wholeProd.brand}</h2>
      <p>{wholeProd.name}</p>
      <div className="prices">
        <h3>₹{wholeProd.Overall_Price}</h3>
        <span className="original-price">
          {" "}
          ₹{Math.floor(wholeProd.original_price)}
        </span>
        <span className="discount">{wholeProd.discount}% off</span>
      </div>
      <div className="flex">
        <h4 className="brand_name">Size: </h4>
        <span>{wholeProd.sizes.map((size) => size + ",")}</span>
      </div>
      <div className="flex">
        <h4 className="brand_name">For: </h4>
        {wholeProd.Ideal_for === "M" ? (
          <span>Men</span>
        ) : wholeProd.Ideal_for === "F" ? (
          <span>Women</span>
        ) : (
          <span>Unisex</span>
        )}
      </div>
      {wholeProd.isInCart ? (
        <button className="add-to-cart" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      ) : (
        <button
          className="add-to-cart"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: wholeProd })}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
