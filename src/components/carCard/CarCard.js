import { Card } from 'antd';
import { useState } from 'react';
import CarDetailModal from '../carDetailModal/CarDetailModal';
import { httpUpdateReviewed, httpGetCar } from '../../hooks/requests'

const CarCard = ({ car }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [carInView, setCarInView] = useState(car)
    
    const loading = false
    const noImage = 'https://cdn.dribbble.com/users/20883/screenshots/14517864/media/f28c6f75bab6f72ccb40e0cfd193c7cc.png?compress=1&resize=400x300'
    const carImage = car.img? car.img: noImage

    const showModal = async () => {
        setCarInView(await httpGetCar(car.id))
        setIsModalVisible(true);
        httpUpdateReviewed(car.id);
    };

    const handleIsModalVisible = (bool) => {
        setIsModalVisible(bool)

    }

    return(
        <div>
            <Card
                hoverable
                style={{height: 300}}
                loading={loading}
                cover={<img style={{ height:200, objectFit: 'cover'}} alt="example" src={`${carImage}`} />}
                onClick={showModal}
            >
                <Card.Meta style={{display: 'flex', flexDirection:'row'}} title={`${car.make} ${car.model}`} description={`${car.price}€`} />
            </Card>
            <CarDetailModal
                isModalVisible={isModalVisible}
                handleIsModalVisible={handleIsModalVisible}
                car={carInView}
                carImage={carImage}
            />
        </div>
          
    )
};

export default CarCard;