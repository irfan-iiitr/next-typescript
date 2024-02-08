export default function dashboardLayout({children,notification,revenue,users,login}:{
    children:React.ReactNode,
    notification:React.ReactNode,
    revenue:React.ReactNode,
    users:React.ReactNode,
    login:React.ReactNode,
}) {

    const isLoggedIn = true;
  return (
    
    <div>
     <div>{children}</div>
     <div className="flex ">
       {
        isLoggedIn?
                <>  
                <div className="flex-col w-1/2">
                <div className="flex rounded-lg justify-center text-center items-center border-2 shadow-red-100 shadow-lg border-white bg-blue-500 m-4 h-64">{notification}</div>
                <div className="flex  rounded-lg justify-center text-center items-center border-2 shadow-red-100 shadow-lg border-white bg-blue-500 m-4 h-64">{revenue}</div>
            </div>
            
            <div className="flex  rounded-lg justify-center text-center items-center w-full border-2 shadow-red-100 shadow-lg border-white bg-blue-500 m-4">{users}</div>
            </> :<div className="flex h-64  rounded-lg justify-center text-center items-center w-full border-2 shadow-red-100 shadow-lg border-white bg-blue-500 m-4 ">{login}</div>
       }

         
     </div>
    </div>
  )
}