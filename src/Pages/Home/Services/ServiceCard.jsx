import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
      </div>
      <div className="text-end">
        <Link to={`/checkout/${_id}`}>
          <button>
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
