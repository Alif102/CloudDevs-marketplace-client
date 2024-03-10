import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
    const {user} = useAuth()
    const [bids, setBids] = useState([])
    const [isHidden, setIsHidden] = useState(false);
    console.log(bids);
    console.log(bids);
    const url = `https://clouddevs.vercel.app/jobBids?email=${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBids(data)
        })
    }, [url])

    const handleComplete = (_id) => {
    
        setIsHidden(current => !current);
    
    
                  
            
                  fetch(`https://clouddevs.vercel.app/jobsBids/${_id}`, {
                     method: 'PUT',
                     headers: {
                        'content-type': 'application/json'
                     },
                     body: JSON.stringify({status: "Completed"})
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                    if(data.modifiedCount > 0) {
                      Swal.fire({
                        title: 'success!',
                        text: 'Completed successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                      const remaining = bids.filter(bid => bid._id !== _id)
                      const updated = bids.find(bid => bid._id === _id)
                      updated.status = "Completed"
                      const newjobs = [updated, ...remaining];
                      setBids(newjobs)
                    }
                  })
            
                
           
        }

    return (
        <div>
          <Helmet>
            <title>Cloud Devs Pro| My Bids</title>
          </Helmet>
    <div className="overflow-x-auto h-[800px] mx-3 mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Jobs & Date</th>
                <th>Price & Email</th>
                <div className="lg:flex flex-col">
                <th>Status</th>
                <th></th>
                </div>
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
              bids?.map((t) => 
                <tr key={t._id}>
                  <td>
                    <div className="flex flex-col sm:flex-row items-center space-x-3">
                      <div>
                        <div className="font-bold text-[#2c3e50]uchsia-400">{t.jobTitle}</div>
                        <div className="text-sm">{t.deadline}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  ${t.price}
                    
                    <br />
                    <span className="badge badge-ghost badge-sm">{t.email}</span>
                  </td>
               <div className="flex">
               <div className="lg:flex-row grid grid-cols-1">
               
               <th>
                   {t.status}
               </th> 
              </div>
              <div className="lg:flex-row grid grid-cols-1">
            
               <td >
                  { t.status === "In progress"   ?
                     <button  style={{ display: isHidden ? 'none' : 'block' }} onClick={() => handleComplete(t._id)} className="bg-gradient-to-r rounded-lg from-purple-500 to-pink-500 text-white btn-sm">Complete</button>
                     :
                     <button className="bg-gradient-to-r hidden rounded-lg from-purple-500 to-pink-500 text-white btn-sm">Complete</button>
                  }
               </td> 
              </div>
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

export default MyBids;