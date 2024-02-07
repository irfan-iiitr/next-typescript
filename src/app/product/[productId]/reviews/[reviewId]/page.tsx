import { notFound } from "next/navigation"



export default function reviewsOfProduct({params}:{params:{
    productId:string,
    reviewId:string

}})
{
   {
     if (parseInt(params.reviewId)>1000)
    notFound();
}

    return (
        <>
        <h1>Review about Product {params.productId} with reviewId {params.reviewId} </h1>
        </>
    )
}