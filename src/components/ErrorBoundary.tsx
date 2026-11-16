import { 
    isRouteErrorResponse,
    useRouteError,
    NavLink
 } from "react-router"

export const ErrorBoundary = () => {
    const error = useRouteError()

    let title = "Unexpected Error !!!"
    let message = "Something went wrong"
    let status: number | null = null

    if(isRouteErrorResponse(error)){
        status = error.status
        title = error.statusText
        message = typeof error.data === "string"
            ? error.data
            : "Unable to complete the request"
    } else if(error instanceof Error){
        message = error.message
    }

    return(
        <main>
            <h1>
                {status ? `${status} - ${title}` : title}
            </h1>
            <p>{message}</p>
            <NavLink to="/">Back to Home</NavLink>
        </main>
    )
}