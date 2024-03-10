import { motion } from "framer-motion";
import moment from "moment";
import {  useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import loader from "/infinite.svg";
import useAuth from "../../hooks/useAuth";
// import useAxios from "../../hooks/useAxios";
import axios from "axios";

const TabWiseJobs = () => {
  const categories = ["On Site", "Remote", "Hybrid", "Part Time"];
  // const axiosInstance = useAxios();
  const { user } = useAuth();
  const [active, setActive] = useState("On Site");
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    axios
      .get(`https://clouddevs.vercel.app/allJobs?category=${active}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ active]);
  const handleTabChange = (category) => {
    // setJobs(null);
    setActive(category);
  };
  console.log(jobs)
  return (
    <div className="w-[90%] md:w-[85%] mx-auto my-20 border-b border-theme">
      <div className="flex items-center justify-center gap-5 md:gap-10">
        {categories.map((category, index) => (
          <p
            onClick={() => handleTabChange(category)}
            key={index}
            className={`font-semibold px-1 md:px-3 py-1 rounded-lg cursor-pointer select-none active:scale-90 duration-300 ${
              category == active
                ? "bg-theme2 border border-transparent"
                : "bg-white border border-theme"
            }`}
          >
            {category}
          </p>
        ))}
      </div>
      {jobs ? (
        <div className=" my-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <motion.div
              initial={{
                x: 100,
                zoom: 0,
              }}
              animate={{
                x: 0,
                zoom: 1,
              }}
              transition={{ type: "tween" }}
              key={job._id}
              className="border-l-4 border-theme2 hover:border-theme p-4 rounded-lg shadow-xl hover:shadow-2xl duration-100 ease-linear"
            >
              <div className="flex items-center gap-8">
                <img
                  className="w-14 h-14 rounded-full border-2 border-theme2"
                  src={job.Image}
                  alt=""
                />
                <div className="flex flex-col gap-1 w-full">
                  <p className="font-semibold ">{job?.jobTitle}</p>
                  <div className="flex flex-col gap-1 text-sm ">
                    {/* <div className="flex gap-0 justify-between md:gap-6 md:justify-start">
                      <p>Author : {job.authorName}</p>
                      <p>Applicants : {job.applicants}</p>
                    </div> */}
                    <div className="flex flex-col md:flex-row gap-1 md:gap-6">
                      <p>Publish Date : {job?.jobPostingDate}</p>
                      <p>
                        Deadline :{" "}
                        {moment(job?.deadline).format("Do MMM YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <p className="border border-theme rounded-full px-3">
                  {job?.category.charAt(0).toUpperCase() +
                    job?.category.slice(1)}
                </p>
                <motion.p className="flex items-center gap-1">
                  <FaBangladeshiTakaSign></FaBangladeshiTakaSign>{" "}
                  {job?.salaryRangeStart} - {job?.salaryRangeEnd}
                </motion.p>
                <Link to={`/job-details/${job?._id}`}>
                  <button
                    onClick={() => {
                      !user &&
                        toast.info("You have to log in first to View Details", {
                          position: "top-center",
                          autoClose: 2000,
                        });
                    }}
                    className="bg-theme text-white font-semibold px-2 md:px-4 py-1 rounded-lg active:scale-90 duration-300 cursor-pointer select-none flex items-center gap-2"
                  >
                    Bid Now
                    <BsArrowRight className="text-xl"></BsArrowRight>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <h1>Loading .....</h1>
        // <img className="block mx-auto my-20" src={loader}></img>
      )}
    </div>
  );
};

export default TabWiseJobs;