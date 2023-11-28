export default function middlewarePipeline(context, middleware, index){
    console.log("middleware pipeline");
    const nextMiddleware = middleware[index];
    
    if(!nextMiddleware){
        return context.next;
    }

    return() => {
        nextMiddleware({
            ...context,
            next: middlewarePipeline(context, middleware, index + 1)
        })
    }
}
