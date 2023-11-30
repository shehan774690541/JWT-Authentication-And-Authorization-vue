import jwtUtils from "@/helpers/jwtUtils"


export default function auth({ next, router }) {
    jwtUtils.loadToken();
    return next()
}