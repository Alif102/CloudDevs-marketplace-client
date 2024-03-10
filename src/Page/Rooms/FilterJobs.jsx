import { useEffect, useState } from "react";
// import JobList from "./JobList";

const FilterJobs = () => {
    const [AllJobs, setAllJobs] = useState([]);
    useEffect( ()=> {
        fetch('https://clouddevs.vercel.app/allJobs')
        .then(res => res.json())
        .then(data => setAllJobs(data))
    
    } ,[])
    const [items, setItems] = useState([AllJobs]);

  console.log(items);

  const filterItems=(catItem)=>{
    const updateItems=AllJobs.filter((curItem)=>{
        return curItem.category === catItem
    });
    setItems(updateItems);
  }
  //   const [filteredData, setFilteredData] = useState([AllJobs]);
  // const handleFilter = (category) => {
  //     const filtered = AllJobs.filter((job) => job.category === category);
  //     setFilteredData(filtered);
  //    };
  
  return (
    // <div>
        
       
    //     <button onClick={() => handleFilter('remote')}>Remote</button>
    //   <button onClick={() => handleFilter('hybrid')}>Hybrid</button>
    //   <button onClick={() => setFilteredData(AllJobs)}>All</button>


    //   <JobList data={filteredData} />

    // </div>
    <div>
      <button onClick={()=>setItems(AllJobs)}>
        All Product
      </button>
      <button onClick={()=>filterItems("remote")}>
        remote
      </button>
      <button onClick={()=>filterItems("hybrid")}>
        hybrid
      </button>
      <div>
      {
      items.map((val)=> (
        <div key={val._id}>
          <h1>{val.jobTitle}</h1>
          <h1>{val.description}</h1>

        </div>
      ))
      }
      </div>

    </div>
  )
}

export default FilterJobs

