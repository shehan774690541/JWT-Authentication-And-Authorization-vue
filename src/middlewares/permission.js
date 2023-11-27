import jwtUtils from "@/helpers/jwtUtils";

export default function exampleMiddleware(to, from, next, router) {
    try {

        if(!hasPermissionsNeeded(to)) {
            console.log("====>")
            next()
        }
        
    } catch (error) {
        console.log(error)
    }

    function hasPermissionsNeeded(to) {
        console.log("middleware permission")
        // var permissions = to.meta.permissons;
        var hasPermission = true

        // if(jwtUtils.loadToken() !== null){
        //     hasPermission = true
        // }

        // if(to.name == "home" || to.name == "user"){
        //     hasPermission = true;
        // }

        return hasPermission
    }

    return next()
}