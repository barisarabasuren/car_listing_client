import { Card, List, Modal } from "antd";
import './carDetailModal.css'

const CarDetailModal = ({ isModalVisible, handleIsModalVisible, car , carImage }) => {
    const handleCancel = () => {
        handleIsModalVisible(false);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var carTitles = ['make', 'model', 'price', 'year', 'reviewed', 'email', 'description']
    console.log()
    const produceData = () => {
        var data = []
        for(let i = 0; i < carTitles.length; i++) {
            if(carTitles[i] !== 'img') {
                if(carTitles[i] === 'price') {
                    data.push([carTitles[i], car[carTitles[i]], '€'])
                } 
                else if(carTitles[i] === 'year') {
                    const year = new Date(car[carTitles[i]]).getFullYear() 
                    data.push([carTitles[i], year])
                }
                else {
                    data.push([carTitles[i], car[carTitles[i]]])    
                }
            }
        }
        return data
    }

    const data = produceData()

    return (
        <Modal
            bodyStyle={{margin: 0, padding: 0}}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        >
           <Card
                cover={<img alt="example" src={`${carImage}`} />}
            >
                <Card.Meta style={{display: 'flex', flexDirection:'row'}}/>
                <div>
                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <div className="list_item_wrapper">
                                    <div className="list_item_title">
                                        <p>{capitalizeFirstLetter(item[0])}</p>
                                    </div>
                                    <div className="list_item_info">
                                        <p>{item[1]} {item[2]}</p>
                                    </div>
                                </div>
                            </List.Item>
                        )}
                    />    
                </div>
            </Card>
        </Modal>
    );
};

export default CarDetailModal;
