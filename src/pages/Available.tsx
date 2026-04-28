import { ResCard } from "../components/ResCard"
import { ResContext } from "../context/ResContext"
import { useContext } from "react"
import type { Reserve } from "../types/Reserve"

export const Available = () => {

const {reservation} = useContext(ResContext)

const availOnly = reservation.filter((res) => res.available === true)

    return(
        <>
        <h1>Available rooms</h1>
        {availOnly.map((res: Reserve) => {
            return(
                <div>
            	<ResCard id={res.id} name={res.name} type={res.type} capacity={res.capacity} location={res.location} pricePerHour={res.pricePerHour} available={res.available}/>                
                </div>
            )
        })}

        </>
    )
}