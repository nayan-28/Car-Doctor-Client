import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2>Check Out</h2>
      <div className="card-body">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            className="textarea-lg textarea-bordered mt-4"
            placeholder="Details"
          ></textarea>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
