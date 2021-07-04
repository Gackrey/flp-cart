export function calculatePrice(cartItems) {
  const tempPrice = cartItems.reduce(
    (acc, val) => acc + val.quantity * val.Overall_Price,
    0
  );
  return tempPrice;
}
export function calculateOriginalPrice(cartItems) {
  const tempPrice = cartItems.reduce(
    (acc, val) => acc + val.quantity * val.original_price,
    0
  );
  return tempPrice;
}
