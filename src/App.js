import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'
import {apiUrl, filterData} from './data'
import { toast } from 'react-toastify'

const App = () => {
  const[courses, setCourses]=useState([]);
  const [loading, setLoading]=useState(true);
  const [category, setCategory] = useState(filterData[0].title)

const fetchData = async () =>{
  setLoading(true);
  try {
    let res = await fetch(apiUrl);
    let output = await res.json(); 
    // output = url ka data

    setCourses(output.data);

  } catch (error) {
    toast.error("Glt Hai bhaiii")
  }
  setLoading(false);
}

useEffect(() => {
fetchData();
}, [])


  return (
   <div className='min-h-screen flex flex-col '>
 
   <div>
    <Navbar/>
   </div>

<div className='bg-white'>
<div>
   <Filter filterData={filterData} category={category} setCategory={setCategory} />
   </div>
   
   <div className='w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center'>
   {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
   </div>
   
   
   </div>
</div>
  
  )
}

export default App