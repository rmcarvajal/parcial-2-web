import { useNavigate } from "react-router-dom"

export const Home = () => {
const navigate = useNavigate()
    return(
        <>
        <h1>Room Reserve</h1>
        <button onClick={() => navigate("/available")}>View available</button>
        <button onClick={() => navigate("/occupied")}>View Reserved</button>
        </>
    )
}