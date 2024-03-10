import { useEffect } from "react";
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
// import Card from "./Card";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import moment from "moment";

const Work = () => {
    const { user } = useAuth;
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    const [rooms,setRooms] = useState([]);
    useEffect(()=> {
        fetch('https://clouddevs.vercel.app/allJobs')
        .then(res=> res.json())
        .then(data=> {
            if(category){
                const filterd = data.filter(room => room.category === category)
                setRooms(filterd)
            }
            else{
                setRooms(data)
            }
        }
            )

    }, [category])
  return (
    <div>
    {
        rooms && rooms.length>0 ?
    //      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
    //     {
    //         rooms.map(room => (

    //             <Card key={room._id} room={room}/>
    //         ))
    //     }
    // </div>

    <div className=" my-10 mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6">
    {rooms.map((job) => (
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
        className="border-l-4 border-[#4ca1af] hover:border-theme p-4 rounded-lg shadow-xl hover:shadow-2xl duration-100 ease-linear"
      >
        <div className="flex items-center gap-8">
          <img
            className="w-14 h-14 rounded-full border-2 border-[#4ca1af]"
            src={job.Image}
            alt=""
          />
          <div className="flex flex-col gap-1 w-full">
            <p className="font-semibold ">{job.jobTitle}</p>
            <div className="flex flex-col gap-1 text-sm ">
              {/* <div className="flex gap-0 justify-between md:gap-6 md:justify-start">
                <p>Author : {job.authorName}</p>
                <p>Applicants : {job.applicants}</p>
              </div> */}
              <div className="flex flex-col md:flex-row gap-1 md:gap-6">
                <p>Publish Date : {job.jobPostingDate}</p>
                <p>
                  Deadline :{" "}
                  {moment(job.deadline).format("Do MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-16 mt-5">
          <p className="border border-[#4ca1af] rounded-full px-3">
            {job.category.charAt(0).toUpperCase() +
              job.category.slice(1)}
          </p>
          
          <motion.p className="flex items-center gap-1">
            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>{" "}
            {job.minimumPrice} - {job.maximumPrice}
          </motion.p>
          <Link to={`/jobsDetails/${job?._id}`}>
            <button
              onClick={() => {
                !user &&
                  toast.info("You have to log in first to View Details", {
                    position: "top-center",
                    autoClose: 2000,
                  });
              }}
              className=" text-white bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] font-semibold px-2 md:px-4 py-1 rounded-lg active:scale-90 duration-300 cursor-pointer select-none flex items-center gap-2"
            >
              Bid Now
              <BsArrowRight className="text-xl"></BsArrowRight>
            </button>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>



    : 
    <div className="flex items-center  justify-center mt-8">
        <Heading center={true} title='No Jobs Available in This category' 
        subtitle='Please Select Another Category'></Heading>
    </div>
    }
    </div>
  )
}

export default Work