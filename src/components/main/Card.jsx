import "./Main.scss"

const Card = ({title,name,image,desc}) => {
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <img src={image} alt="" loading="lazy"/>
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
