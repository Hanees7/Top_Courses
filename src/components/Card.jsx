import React from 'react'
import { FcLike, FcLikePlaceholder  } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses= props.setLikedCourses;

    const clickHandler= () =>{
        // Buttons Logic
if(likedCourses.includes(course.id)){
//phle se Like hua pada hai
setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
toast.warning("UnLike hai Bhai");
}else{
    // agr liked nai h to insert krna hai
    if(likedCourses.length === 0){
        setLikedCourses([course.id]);
    }
    else{
        // When length non-empty then
        setLikedCourses((prev) => [...prev, course.id]);
    }
    toast.success("Liked Hai Bhai")
}
    }

 

  return (
<div className='w-[300px] bg-blue-300 bg-opacity-2 rounded-md overflow-hidden '>
    <div className='relative'> 
    <img src={course.image.url} alt='img'/>
    
    <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
        <button onClick={clickHandler}>
         {
            likedCourses.includes(course.id) ? (<FcLike fontSize="1.45rem"/> ) : (<FcLikePlaceholder fontSize="1.45rem"/>)
         }
         </button>
    </div>

    </div>
     <div className='p-5'>
        <p className='text-black font-semibold text-lg leading-5'>{course.title}</p>
        <p className='text-black mt-2'>{
            course.description.length > 100 ? (course.description.substr(0, 100)) +"..." : (course.description)
        }</p>
    </div>
</div>
    
  )
}

export default Card