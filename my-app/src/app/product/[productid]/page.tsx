export default function productDetails({params}: {
    params : {productid: string}
}){
    return (<>
     <h1>Product Details</h1>
     <p>These are the product details of {params.productid}</p>
     
    </>  
   
)
}