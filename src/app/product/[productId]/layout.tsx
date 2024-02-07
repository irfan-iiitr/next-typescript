import React from 'react'

const layout = ({children}:{children:{
    children: React.ReactNode;
}}) => {
  return (
    <>
         {children}
        
        <p className="font-light text-gray-200 mt-5">Suggested Products</p>
    </>
  )
}

export default layout
