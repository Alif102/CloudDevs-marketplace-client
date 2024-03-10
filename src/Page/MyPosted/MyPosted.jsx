import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyPosted = () => {
    const {user} = useAuth()
    const [users, setUsers] = useState([])
    console.log(user);
    const url = `https://clouddevs.vercel.app/myPost?email=${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsers(data)
        })
    }, [])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
       

         fetch(`https://clouddevs.vercel.app/myPost/${_id}`, {
             method: "DELETE"
            
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             if(data.deletedCount > 0) {
             Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
           const remainingUser = users.filter(u => u._id !== _id)
           setUsers(remainingUser)
            }
         })
         }
       })
 }


 
    return (
        <div className="">
             <Helmet>
                <title>Cloud Devs Pro | My Post</title>
            </Helmet>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <div className="overflow-x-auto h-[800px] mx-3 mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Jobs & Category</th>
                <th>Date & Email</th>
                <div className="lg:flex flex-col">
                <th>Price Range</th>
                <th></th>
                </div>
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
              users?.map((t) => 
                <tr key={t._id}>
                  <td>
                    <div className="flex flex-col sm:flex-row items-center space-x-3">
                      <div>
                        <div className="font-bold text-[#2c3e50]uchsia-400">{t.jobTitle}</div>
                        <div className="text-sm">{t.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {t.deadline}
                    <br />
                    <span className="badge badge-ghost badge-sm">{t.email}</span>
                  </td>
                 <div className="lg:flex-row grid grid-cols-1">
                 <td>${t.minimumPrice}-${t.maximumPrice}</td>
                  <th>
                    <button onClick={() => handleDelete(t._id)} className="btn bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white btn-xs">
                      Delete
                    </button>
                    <Link to={`/updateJobs/${t._id}`}  className="btn bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white btn-xs">
                      Update
                    </Link>
                  </th> 
                 </div>
                </tr>
            )}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
      
    );
};

export default MyPosted;