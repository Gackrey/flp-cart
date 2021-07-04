import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div className="nav heading">
      <Link to={"/"} className="link">
        <h2 className="heading">Flipkart Clone</h2>
      </Link>
      <input type="text" placeholder="Search for products,brands and more" />
      <div className="inner-nav">
        <Link to={"/cart"} className="link">
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}
