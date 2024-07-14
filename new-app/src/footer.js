import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <img src="images/blings-logo.png" alt="logo" className="footer__logo" />
        <div className="footer__main--links">
          <a href="#" className="footer__main--link">
            Home
          </a>
          <a href="" className="footer__main--link">
            About
          </a>
          <a href="" className="footer__main--link">
            Products
          </a>
        </div>
        <span className="footer__number">07040525298</span>
      </div>
      <hr />
      <span className="footer__rights">
        @2024 All the Rights Reserved - Blings
      </span>
    </footer>
  );
}

export default Footer;
