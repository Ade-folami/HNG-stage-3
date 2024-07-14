import "./subscribe.css";

function Subscribe() {
  return (
    <section className="section__subscribe">
      <h1 className="subscribe__heading heading__primary">
        Sign Up to Receive Updates on
        <br />
        Our New <span>Blings!</span>
      </h1>
      <div className="subscribe__user">
        <input
          type="email"
          className="subscribe__user--email"
          placeholder="Email"
        />
        <a href="#" className="subscribe__user--button">
          Subscribe
        </a>
      </div>
    </section>
  );
}

export default Subscribe;
