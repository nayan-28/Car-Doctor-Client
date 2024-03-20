import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service_id: _id,
      service: title,
      price: price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order Confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="card-body">
      <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              name="name"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="date"
              className="input input-bordered"
              required
              name="date"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              className="input input-bordered"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered"
              defaultValue={price}
              required
            />
          </div>
        </div>

        <div className="form-control mt-  6">
          <button className="btn btn-primary">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
