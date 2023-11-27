import JwtUtils from "@/helpers/jwtUtils"

export default function auth({ next, router }) {
    // JwtUtils.loadToken()
    console.log("Auth middleware") 
    return next();
}
