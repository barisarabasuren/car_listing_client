const API_URL = 'http://localhost:8000'
// const API_URL = 'https://guarded-caverns-65239.herokuapp.com'

export const httpGetAllCars = async () => {
    const response = await fetch(`${API_URL}/cars`);
    return await response.json()
}

export const httpGetCar = async (id) => {
    const response = await fetch(`${API_URL}/cars/${id}`)
    return await response.json()
}

export const httpAddCar = async (car) => {
    return await fetch(`${API_URL}/cars`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car)
    });
}

export const httpUpdateReviewed = async (id) => {
    return await fetch(`${API_URL}/cars`,{
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: id})
    })
}