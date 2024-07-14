import "./App.css";
import blingsLogo from "./images/blings-logo.png";
import homeIcon from "./images/teenyicons_home-outline.png";
import aboutIcon from "./images/clarity_avatar-line.png";
import productsIcon from "./images/prod-icon.png";
import cartIcon from "./images/cart-icon.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <img src={blingsLogo} alt="blings " className="nav__logo" />
          <div className="nav__links">
            <a href="#" className="nav__link">
              <span>
                <img src={homeIcon} alt="home" className="nav__link--logo" />
              </span>
              Home
            </a>
            <a href="" className="nav__link">
              <span>
                <img src={aboutIcon} alt="About" className="nav__link--logo" />
              </span>
              About
            </a>
            <a href="#section__products" className="nav__link">
              <span className="nav__link--logo">
                <img src={productsIcon} alt="Products" />
              </span>
              Products
            </a>
            <a href="cart.html" className="nav__link">
              <span>
                <img src={cartIcon} alt="cart" className="nav__link--logo" />
              </span>
              Cart
            </a>
          </div>
        </nav>
        <div className="header__main">
          <h1 className="header__heading heading__primary">
            Unveil Your Inner Radiance with Our Exclusive <span>Jewelry</span>{" "}
            Collections
          </h1>
          <input type="text" className="header__input" />
          <a href="#" className="header__button">
            Explore our Collections
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
