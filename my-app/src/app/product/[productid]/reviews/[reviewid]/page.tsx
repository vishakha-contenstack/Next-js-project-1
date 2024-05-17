import product from "@/app/product/page"
import { notFound } from "next/navigation"
export default function reviewDetails({params}: {
    params: {
        productid: string, 
        reviewid: string
    }
}){

    if(parseInt(params.reviewid) > 1000){
     notFound()

    }
    return <>

   <h1> review {params.reviewid} for the product {params.productid}</h1>
  


    </>
}