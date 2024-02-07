import { Metadata } from "next"

type Props={
    params:{
        productId: string
    }
}

export const generateMetadata =({params}:Props):Metadata=>{
       return {
        title: `Product ${params.productId} Reviews`,
        description: `This is the reviews page for product ${params.productId}`
       }
}

export default function reviews({params}:Props){
    return(
        <div className="bg-slate-400 m-5">
            Reviews about product {params.productId}
        </div>
    )
}