import { ResCard } from "../components/ResCard"
import { ResContext } from "../context/ResContext"
import { useContext } from "react"
import type { Reserve } from "../types/Reserve"

export const Occupied = () => {

const {reservation} = useContext(ResContext)

const resOnly = reservation.filter((res) => res.available === false)

    return(
        <>
        <h1>Occupied rooms</h1>        
        {resOnly.map((res: Reserve) => {
            return(
                <div>
                <ResCard id={res.id} name={res.name} type={res.type} capacity={res.capacity} location={res.location} pricePerHour={res.pricePerHour} available={res.available}/>                
                </div>
            )
        })}

        </>
    )
}