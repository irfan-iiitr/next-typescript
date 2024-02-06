export default function reviewsOfProduct({params}:{params:{
    productId:String,
    reviewId:String

}}){
    return (
        <>
        <h1>Review about Product {params.productId} with reviewId {params.reviewId} </h1>
        </>
    )
}