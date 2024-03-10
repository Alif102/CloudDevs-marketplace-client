import { Link } from "react-router-dom";

const TabItems = ({item}) => {
    const {jobTitle, email, _id, deadline, description, minimumPrice, maximumPrice, category} = item;
    return (
        <div>
        <div className="card w-72 h-96 py-5  bg-base-100 shadow-xl mb-5">
  <div className="card-body">
    <h2 className="card-title text-[#2c3e50]uchsia-400">{jobTitle}</h2>
    <p className="font-bold">Deadline: {deadline}</p>
    <p className="font-bold">Price range: ${minimumPrice}-${maximumPrice}</p>
    <p >{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/jobsDetails/${_id}`}  className="btn  bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white">Bid now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabItems;