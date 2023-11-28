export default function auth({ next, router }) {
    console.log("permission auth")
    return next()
}