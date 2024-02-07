export default function docsRoutes({params}:{params:{
  slug:String[],
}}){
    return(
        <>
          <h1>Catch all docs Routes</h1>
          {
            params.slug?.length===2 && <h1>{params.slug[0]} feature and {params.slug[1]} concept</h1>
          }
        </>
    )
}