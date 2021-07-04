import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";
import {
  calculatePrice,
  calculateOriginalPrice
} from "../utils/calculatePrices";
export function Cart() {
  const navigate = useNavigate();
  const { cartItems, saveForLater, dispatch } = useCart();
  const [totalPrice, settotalPrice] = useState(0);
  const [originalPrices, setoriginalPrices] = useState(0);
  useEffect(() => {
    settotalPrice(calculatePrice(cartItems));
    setoriginalPrices(calculateOriginalPrice(cartItems));
  }, [cartItems]);
  console.log(cartItems, saveForLater);
  return (
    <div className="cart">
      <div>
        {cartItems.length === 0 && saveForLater.length === 0 ? (
          <div>
            <h1>Your cart is empty</h1>
            <button className="add-to-cart" onClick={() => navigate("/")}>
              Shop Now
            </button>
          </div>
        ) : (
          ""
        )}
        {cartItems.length > 0 ? (
          <div className="cart-items-box">
            <h3>Cart ({cartItems.length} items)</h3>
            {cartItems.map((item) => (
              <div className="cart-items-details-box">
                <div>
                  <img
                    src={item.Image}
                    className="cart-image"
                    alt="cart-item"
                  />
                  <div>
                    <button
                      disabled={item.quantity === 1}
                      className="btn-incdec"
                      onClick={() =>
                        dispatch({ type: "DEC_QTY", payload: item })
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn-incdec"
                      onClick={() =>
                        dispatch({ type: "INC_QTY", payload: item })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-items">
                  <h2>{item.name}</h2>
                  <p>{item.brand}</p>
                  <div className="cart-price">
                    <h3>₹{item.Overall_Price}</h3>
                    <span className="original-price">
                      ₹{item.original_price}
                    </span>
                    <span className="discount">{item.discount}% off</span>
                  </div>
                  <div>
                    <button
                      className="btn-cart-reducers"
                      onClick={() =>
                        dispatch({ type: "SAVE_FOR_LATER", payload: item })
                      }
                    >
                      Save for later
                    </button>
                    <button
                      className="btn-cart-reducers"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {saveForLater.length > 0 ? (
          <div className="cart-items-box">
            <h3>Saved Cart ({saveForLater.length} items)</h3>
            {saveForLater.map((item) => (
              <div className="cart-items-details-box">
                <div>
                  <img
                    src={item.Image}
                    className="cart-image"
                    alt="cart-item"
                  />
                  <div>
                    <button
                      disabled
                      className="btn-incdec"
                      onClick={() =>
                        dispatch({ type: "DEC_QTY", payload: item })
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      disabled
                      className="btn-incdec"
                      onClick={() =>
                        dispatch({ type: "INC_QTY", payload: item })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-items">
                  <h2>{item.name}</h2>
                  <p>{item.brand}</p>
                  <div>
                    <button
                      className="btn-cart-reducers"
                      onClick={() =>
                        dispatch({
                          type: "MOVE_TO_CART_FROM_SL",
                          payload: item
                        })
                      }
                    >
                      Move to cart
                    </button>
                    <button
                      className="btn-cart-reducers"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_SL", payload: item })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-details-box">
          <h3>Total Price: {totalPrice}</h3>
          <h3>Original Price: {originalPrices}</h3>
          <h3>Discount: {originalPrices - totalPrice}</h3>
          <button className="add-to-cart">Place Order</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
