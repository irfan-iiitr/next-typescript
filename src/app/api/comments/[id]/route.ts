import { comments } from "@/app/data/comments";

export async function GET(_request: Request,{params}:{
    params: {
        id:string,
    }
}){

    const comment=comments.find((c)=>c.id===parseInt(params.id));
    return  Response.json(comment);
}

export async function PATCH(request:Request,{params}:{
    params: {
        id:string,
    }
}){
    const comment=await request.json();
    const index=comments.findIndex((c)=>c.id===parseInt(params.id));
    comments[index].text=comment.text;
    return new Response(JSON.stringify(comment),{
        headers:{
            "Content-Type": "application/json",
        },
    });

}

export async function DELETE(request:Request,{params}:{
    params: {
        id:string,
    }
}){
    const index=comments.findIndex((c)=>c.id===parseInt(params.id));
    comments.splice(index,1);
    return new Response(null,{
        status:204,
    });
}