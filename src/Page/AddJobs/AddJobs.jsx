import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {motion} from 'framer-motion'
import moment from "moment/moment";

const AddJobs = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleAddProduct = (event) => {
        event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const jobTitle = form.jobTitle.value;
          const deadline = form.deadline.value;
          const jobPostingDate = form.jobPostingDate.value;
          const description = form.description.value;
          const category = form.category.value;
          const minimumPrice = form.minimumPrice.value;
          const maximumPrice = form.maximumPrice.value;
          const Image = form.Image.value;
          const product = {email,Image, jobTitle,jobPostingDate, deadline, description, category, minimumPrice, maximumPrice}
          console.log(product);
    
          fetch(`https://clouddevs.vercel.app/addJobs`, {
            
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
                text: 'job added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
              navigate('/myPosted')
            }
          })
    
        }
    return (
        <div>
          <Helmet>
            <title>Cloud Devs Pro | Add Jobs</title>
          </Helmet>
        <div  className="min-h-screen flex items-center justify-center bg-purple-100">
<motion.form
 initial={{ zoom: 0 }}
 animate={{ zoom: 1 }}
 transition={{ type: "spring" }}
 onSubmit={handleAddProduct} className="bg-white p-8 rounded-lg shadow-lg py-10 w-[1000px]">
  
  <h1 className="text-center text-[#4ca1af] font-semibold text-2xl">Add Jobs</h1>
 
  <div  className="mt-6 lg:flex gap-5">
<div className="flex-1">
<div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Your Email</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="email"
      name="email"
      placeholder="the employer email address"
      value={user?.email
      }
      required
    />
   </div>
  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Job title</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder=" Job title"
      name="jobTitle"
      required
    />
   </div>
   
   <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Posting Date</h1>
  <input
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                  type="text"
                  defaultValue={moment().format("Do MMM YYYY")}
                  readOnly
                  name="jobPostingDate"
                />
              </div>

            


  <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Deadline</h1>
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
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Jobs Category</h1>
      <select
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
                  name="category"
                >
                 <option value="On Site">On Site Job</option>
              <option value="Remote">Remote Job</option>
              <option value="Hybrid">Hybrid Job</option>
              <option value="Part time">Part Time Job</option>
                </select>
   </div>

     {/* image */}
     <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Company Logo</h1>
      <input
              type="text"
              placeholder="Image link"
              name="Image"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
            />
            </div>
  <div className="py-3">
      <div className=" flex justify-center items-center gap-6">
        <div>
        <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]"> Minimum price</h1>
      <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your minimum price"
      name="minimumPrice"
      required
    />
        </div>

        <div>
        <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Maximum price</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your maximum price"
      name="maximumPrice"
      required
    />
        </div>
      </div>
     
   </div>
   <div className="py-3">
      <h1 className="font-bold mb-2 ml-1 text-[#4ca1af]">Description</h1>
   <input
      className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
      type="text"
      placeholder="your job description"
      name="description"
      required
    />
   </div>
  {/* <div className="py-3">
      
   </div> */}
  
 </div>
   
  </div>
 <div className="flex justify-center">
  
 <button   className="w-full mt-4 py-3 lg:px-72 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white text-[#2c3e50]enter font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">Add Job</button>
 </div>
         
</motion.form>
</div>

  </div>
    );
};

export default AddJobs;