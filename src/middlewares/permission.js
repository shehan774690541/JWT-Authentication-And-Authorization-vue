import jwtUtils from "@/helpers/jwtUtils"

export default function auth({to, from ,next, router }) {
    console.log("permission middleware")
    
    if(!hasPermissionsNeeded(to)){
        next('/user')
    }
    else{
        return next()
    }

    function hasPermissionsNeeded(to){
        var hasPermission = false
        var userPermissions = []
        console.log(to)

        try {
            userPermissions = jwtUtils.parseJwt
            console.log("user permissions",userPermissions(JSON.parse(localStorage.store).token))
            hasPermission = true
        } catch (error) {
            console.log(error)
        }

        

        return hasPermission
    }


    return next()
}