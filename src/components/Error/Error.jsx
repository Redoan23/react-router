import { useNavigate, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <i>{
                 `fatal error ${error.status}`
            }</i>
            {
                error.status === 404 && <div>
                    <p>page not found</p>
                    <button onClick={handleNavigate} >Go Back</button>
                </div>
            }
        </div>
    )
}