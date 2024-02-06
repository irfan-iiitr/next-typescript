export default function pageDetails({params}:{params:{productId:String}}){
    return (
        <div>
        Product Page  about {params.productId}
        </div>
    )
}