import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="error-container">
            <h1>Oops! Something went wrong</h1>
            <p>{error.message || 'An unexpected error occurred'}</p>
            <p>Status: {error.status || 'Unknown error'}</p>
        </div>
    )
}
