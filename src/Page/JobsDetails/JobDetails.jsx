import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


import moment from "moment";
import { CiLocationOn } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";


const JobDetails = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate()
  const [status, setStatus] = useState('Pending');
  console.log(data);
  const {
    jobTitle,
    email,
    deadline,
    description,
    minimumPrice,
    maximumPrice,
  } = data;

  const handleAddBid = (event) => {
    event.preventDefault()
      const form = event.target;
      const price = form.price.value;
      const deadline = form.deadline.value;
      const email = form.email.value;
      const buyer_email = form.buyer_email.value;
      const product = {price, deadline, buyer_email, status, email, jobTitle}
      console.log(product);

      fetch(`https://clouddevs.vercel.app/jobsBids`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Bid added successfully in my bids page',
            icon: 'success',
            confirmButtonText: 'Done'
          })
          navigate("/myBids")
        }
      })

    }
  return (
    <section className="">
      <Helmet>
            <title>Cloud Devs Pro | Job Details</title>
          </Helmet>
      <div>
        {/* <div className="flex justify-center pt-10">
          <div className="card bg-primary  w-[800px] bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white">
            <div className="card-body">
              <h2 className="card-title ">{jobTitle}</h2>
              <p className="font-bold ">Deadline: {deadline}</p>
              <p className="font-bold ">
                Price range: ${minimumPrice}-${maximumPrice}
              </p>
              <p className="">{description}</p>
            </div>
          </div>
        </div> */}
        <div className="grid mb-8 w-[80%] mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border md:col-span-1 border-purple-600 p-5  rounded-lg">
            <p className="text-2xl font-semibold mb-3">Job Details</p>
            <div className="flex gap-4 p-3">
              <CiLocationOn className="text-[#2c3e50]xl"></CiLocationOn>
              <div className="">
                <p className="text-lg font-semibold">Address</p>
                <p className="text-slate-400">
                  Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-3">
              <GrMoney className="text-xl"></GrMoney>
              <div className="">
                <p className="text-lg font-semibold">Salary Range</p>
                <p className="text-slate-400 flex items-center">
                  <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                  {minimumPrice} - {maximumPrice}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-3">
              <FiShield className="text-2xl"></FiShield>
              <div className="">
                <p className="text-lg font-semibold">Experience</p>
                <p className="text-slate-400">No Need</p>
              </div>
            </div>
          </div>
         
         
          <div className=" col-span-2">
          <p className="font-bold text-3xl">{jobTitle}</p>
          <p className="font-semibold mt-4">
            Deadline:{" "}
            <span className="bg-red-400 ml-2 px-2 py-1 rounded-full text-white">
              {moment(deadline).format("Do MMM YY")}
            </span>
          </p>
          <p className="mt-8 text-2xl font-semibold tracking-widest border-b-2 border-purple-600 pb-2 pl-2">
            Job Description
          </p>
          <p className="mt-4 text-justify text-slate-700">
            {description}
          </p>
          </div>

        


        </div>

        <div className="py-20 bg-purple-100 flex items-center justify-center ">
          <form onSubmit={handleAddBid} className="bg-white p-8 rounded-lg shadow-lg py-10 w-[1000px]">
            <h1 className="text-[#2c3e50]enter text-[#4ca1af] font-semibold text-2xl">
              Place your bid form
            </h1>
            <div className="mt-6 lg:flex gap-5">
              <div className="flex-1">
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Price</h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="text"
                    placeholder="your bidding amount"
                    name="price"
                    required
                  />
                </div>

                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">
                    Deadline
                  </h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="date"
                    placeholder="Job Deadline"
                    name="deadline"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Email</h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="email"
                    placeholder="your email address"
                    value={user?.email}
                    name="email"
                    required
                  />
                </div>
                <div className="py-3">
                  <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">
                    Buyer Email
                  </h1>
                  <input
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                    type="email"
                    placeholder="your maximum price"
                    name="buyer_email"
                    value={email}
                    required
                  />
                </div>
              </div>
            </div>
            {
                user?.email === email ? <button disabled className="w-full mt-4 py-3 px-4 rounded-full bg-gray-400 text-white text-[#2c3e50]enter font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
                Bid on the project
              </button>
              :
              <button className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white text-[#2c3e50]enter font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              Bid on the project
            </button>
            }
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
