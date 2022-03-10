import CarCard from "../components/carCard/CarCard";
import './carList.css'
import { Spin } from 'antd';
import { FrownOutlined } from "@ant-design/icons";


const CarList = ({ cars }) => {
    if(cars === undefined) {
        return(
            <Spin size="large"/>
        ) 
    }

    else if(cars.length > 0) {
        const list = cars.map(car => {
            return (
                <div key={car.id}>
                    <CarCard car={car}/>
                </div>
            )
        })

        return(
            <div className="car_list">
                {list}
            </div>       
        )
    }

    else if(cars.length === 0) {
        return(
            <div style={{height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <FrownOutlined style={{fontSize: 50, marginBottom: 20}} />
                <p>
                There is no car available.
                </p>
            </div>
        )
    } 
};

export default CarList;