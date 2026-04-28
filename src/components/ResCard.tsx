import type { Reserve } from "../types/Reserve"


export const ResCard = ({id, name, type, capacity, location, pricePerHour, available}: Reserve) => {
    return(
        <>
                <div key={id}>
                    <p>{id}</p>
                    <h1>{name}</h1>
                    <p>{type}</p>
                    <p>{capacity}</p>
                    <p>{location}</p>
                    <h2>{pricePerHour}</h2>
                    {available === true ? <h2>Available</h2> : <h2>Occupied</h2>}
                </div>

        </>
    )
}