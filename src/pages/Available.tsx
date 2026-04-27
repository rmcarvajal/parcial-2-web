import { ResCard } from "../components/ResCard"
import { ResContext } from "../context/ResContext"
import { useContext } from "react"
import type { Reserve } from "../types/Reserve"

export const Available = () => {

const {reservation} = useContext(ResContext)
console.log(reservation)
    return(
        <>
        {reservation.map((res: Reserve) => {
            return(
                <div key = {res.id}>
            	<ResCard id={res.id} name={res.name} type={res.type} capacity={res.capacity} location={res.location} pricePerHour={res.pricePerHour} available={res.available}/>                
                </div>
            )
        })}

        </>
    )
}