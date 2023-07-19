import "./card.scss";
const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  id,
  price,
  radio,
  button,
}) => {
  return (
    <>
      <section id={id} className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section>
            <div className="RadioTwo">
              <input className="oneRadio" type="radio" />
              <input className="twoRadio" type="radio" />
              <input className="threeRadio" type="radio" />
              <input className="fourRadio" type="radio" />
            </div>
          </section>
          <section className="card-price">
            <div className="price">
              {newPrice}
              <p>BYN</p>
              <del className="del">{prevPrice}</del>
              <div className="ButtonColumn1">
                <button className="PriceButton">В корзину</button>
              </div>
            </div>
            <div className="ButtonColumn2">
              <button className="PriceButton">В корзину</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
