const BookingRow = ({ booking }) => {
  const { service, price, img, date } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="img" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs text-orange-400">
          Pending
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
