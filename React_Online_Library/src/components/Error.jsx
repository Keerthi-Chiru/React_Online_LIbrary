import { useRouteError } from "react-router-dom";



export default function Error() {
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>Buddy, you are in the wrong path.</p>
            <p>{error.data}</p>
            </div>
        </>
    )
}