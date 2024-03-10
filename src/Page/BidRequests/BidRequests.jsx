import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const BidRequests = () => {
    const {user} = useAuth()
    const [relode, setReload] = useState(true)
    const [status, setStatus] = useState("In progress");
    const [cStatus, setCStatus] = useState("Rejected");
    const [isHidden, setIsHidden] = useState(false);
    const [bids, setBids] = useState([])
   
    console.log(bids);
    const url = `https://clouddevs.vercel.app/bidRequest?buyer_email=${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBids(data)
        })
    }, [relode])

    const handleRejects = (_id) => {
    const updateJobs = {status: cStatus}
    setIsHidden(current => !current);
        
              fetch(`https://clouddevs.vercel.app/jobsBids/${_id}`, {
                 method: 'PUT',
                 headers: {
                    'content-type': 'application/json'
                 },
                 body: JSON.stringify(updateJobs)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.modifiedCount > 0) {
                  Swal.fire({
                    title: 'success!',
                    text: 'Rejected successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  setReload(!relode)
                }
              })
        
            
       
    }
    const handleAccept = (_id) => {
    const updateJobs = {status}
    setIsHidden(current => !current);
        
              fetch(`https://clouddevs.vercel.app/jobsBids/${_id}`, {
                 method: 'PUT',
                 headers: {
                    'content-type': 'application/json'
                 },
                 body: JSON.stringify(updateJobs)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.modifiedCount > 0) {
                  Swal.fire({
                    title: 'success!',
                    text: 'In progress successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  setReload(!relode)
                   
                }
              })

        
            
       
    }


    return (
        <div>
             <Helmet>
                <title>Cloud Devs Pro | Bids Requests</title>
            </Helmet>
             <div>
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
                 <div className="lg:flex-row grid grid-cols-1">
                  <td>
                   {t.status}
                  </td> 
                 </div>
               <td>
               <div className="lg:flex-row grid grid-cols-1">
            

              
                 {  t.status === "Pending"   ?
                     
                     <div  style={{ display: isHidden ? 'none' : 'block' }}  >
                    
                     <button onClick={() => handleAccept(t._id)}  className="btn bg-gradient-to-r from-green-600 to-green-400 text-white btn-xs">
                     Accept
                     </button>
                   
                     <button onClick={() => handleRejects(t._id)}  className="btn bg-gradient-to-r from-red-500 to-pink-300 text-white btn-xs">
                     Reject 
                     </button>
                  </div>
                     :
                     <div className="hidden" >
                    
                     <button onClick={() => handleAccept(t._id)}  className="btn bg-gradient-to-r from-green-600 to-green-400 text-white btn-xs">
                     Accept
                     </button>
                   
                     <button onClick={() => handleRejects(t._id)}  className="btn bg-gradient-to-r from-red-500 to-pink-300 text-white btn-xs">
                     Reject 
                     </button>
                  </div>
                  }
     
                  
                  
                 </div>
               </td>
             
                </tr>
            )}
            </tbody>
            {/* foot */}
          </table>
        </div>
        </div>
        </div>
    );
};

export default BidRequests;