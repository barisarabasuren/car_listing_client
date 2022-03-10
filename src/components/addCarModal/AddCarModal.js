import { Modal } from "antd";
import { useCallback, useEffect, useState } from "react";
import { httpAddCar } from "../../hooks/requests";
import AddCarForm from "../addCarForm/AddCarForm";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const AddCarModal = ({ isModalVisible, handleIsModalVisible }) => {
    const [car, setCar] = useState(null)
    const [loadingSpinner, setLoadingSpinner] = useState('hold')

    const handleCarChange = (car) => {
        setCar(car)
    }

    const addCar = useCallback( async (car) => {
        setLoadingSpinner('spin')
        const response = await httpAddCar(car)
        if(response.status === 201) {
            setLoadingSpinner('success')
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }
    }, [])

    useEffect(() => {
        if(car) {addCar(car)}
    }, [addCar, car])

    const handleCancel = () => {
        handleIsModalVisible(false);
    };

    const renderModal = () => {
        if(car) {
            return <LoadingSpinner loadingSpinner={loadingSpinner}/>
        } else {
            return <AddCarForm handleCancel={handleCancel} handleCarChange={handleCarChange}/>
        }
    }

    return (
        <Modal
            title="List A Car"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[]}
        >
            {renderModal()}
        </Modal>
    );
};

export default AddCarModal;
