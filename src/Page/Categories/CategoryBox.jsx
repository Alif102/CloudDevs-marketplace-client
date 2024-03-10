/* eslint-disable react/prop-types */
import qs from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({label, selected }) => {
  const navigate = useNavigate();
    const [params,setParams] = useSearchParams();
    const handleClick = ()=> {
      let currentQuery = {}
      if(params){
          currentQuery = qs.parse(params.toString())
           const updateQuery = {...currentQuery, category: label}
          const url = qs.stringifyUrl ({
              url: '/',
              query: updateQuery

          })
          navigate(url)
      }
  }
   params.get('category')

    
    
    
 
  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 rounded-md  px-3 py-1 border-b-2 border-[#4ca1af] 
     cursor-pointer ${selected ? '  bg-[#4ba8b6]  text-white hover:text-pink-100' : ''}`}>
      {/* <Icon size={26}/> */}
        <div className="text-md font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox

