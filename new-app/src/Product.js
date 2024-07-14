import "./Products.css";
import chunkyRing from "./images/chunky-ring.png";
import versaceRing from "./images/versace-ring.png";
import hermesRing from "./images/hermes-rings.png";

function Products() {
  return (
    <section className="section__products" id="section__products">
      <h1 className="heading__primary products__heading">
        Discover Timeless Jewelry Creations <br />
        Just for <span>You!</span>
      </h1>
      <div className="products__options">
        <a href="#" className="products__option">
          NEW ARRIVALS
        </a>
        <a href="#" className="products__option">
          CATEGORIES
        </a>
        <a href="#" className="products__option">
          BEST SELLING
        </a>
      </div>
      <div className="products__container">
        <div className="products__container--item">
          <img
            src={chunkyRing}
            alt="chunky-ring"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Chunky ring</h2>
            <span className="product--price">$308,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src={versaceRing}
            alt="versace-ring"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Versace ring</h2>
            <span className="product--price">$47,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src={hermesRing}
            alt="hermes-rings"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Hermes earrings</h2>
            <span className="product--price">$98,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/mornil-studs.png"
            alt="mornil-studs"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Mornil studs</h2>
            <span className="product--price">$33,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/emerald-ring.png"
            alt="emerald-ring"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Emerald ring</h2>
            <span className="product--price">$38,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/egyptian-choker.png"
            alt="egyptian-choker"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Egyptian choker</h2>
            <span className="product--price">$308,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/emerald-necklace.png"
            alt="emerald-necklace"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Emerald necklace</h2>
            <span className="product--price">$90,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/double-ring.png"
            alt="double-ring"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Double ring</h2>
            <span className="product--price">$35,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/circle-choker.png"
            alt="circle-choker"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Circle choker</h2>
            <span className="product--price">$68,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/disle-earrings.png"
            alt="disle-earrings"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Disle earrings</h2>
            <span className="product--price">$98,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/diamond-k-ring.png"
            alt="diamond-k-ring"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Diamond k ring</h2>
            <span className="product--price">$56,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div className="products__container--item">
          <img
            src="images/loop-earrings.png"
            alt="loop-earrrings"
            className="products__container--item-image"
          />
          <div className="products__container--item-description">
            <h2 className="product--name">Loop earrings</h2>
            <span className="product--price">$30,000</span>
            <div className="product--order">
              <div className="product--order-number">
                <span className="order-reduce">-</span>
                <span className="order-number">1</span>
                <span className="order-increase">+</span>
              </div>
              <a href="#" className="product--order-button">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
