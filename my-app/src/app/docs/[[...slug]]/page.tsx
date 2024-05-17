export default function docs({params}:{
    params : {slug: string[]}
}){

    if(params.slug?.length === 2){
        return <h1>Viewing docs for feature {params.slug[0]} and concept of {params.slug[1]}</h1>
    } else if (params.slug?.length ===1){
        return<h1>Viewing docs for feature {params.slug[0]}</h1>
    }
    
    return<><h1>Docs hhome page</h1></> 
}


// catch all url segments maps all the url components to one single url