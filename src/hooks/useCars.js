import { useCallback, useEffect, useState } from "react"
import { httpGetAllCars } from "./requests"

const useCars = () => {
    const [cars, setCars] = useState(undefined)

    const getCars = useCallback(async () => {
        const fetchedCars = await httpGetAllCars();
        setCars(fetchedCars)
    }, []) 

    useEffect(() => {
        getCars()
    }, [getCars])

    return cars
}

export default useCars;