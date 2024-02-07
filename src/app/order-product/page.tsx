"use client";

import { useRouter } from "next/navigation";

const page = () => {
    const router=useRouter();
    const handleCLick=()=>{
        router.replace("/");//cant use back button... router .push -can use back ntn to reach back
    }
  return (
    <div>
      <h1> Order Products</h1>
      <button  className="bg-orange-500 text-black"onClick={handleCLick}>Order</button>
    </div>
  )
}

export default page
