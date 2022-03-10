import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { PlusCircleOutlined } from '@ant-design/icons';

import './App.css';
import AddCarModal from './components/addCarModal/AddCarModal';
import CarList from './pages/CarList';
import { useState } from 'react';
import useCars from './hooks/useCars'


const App = () => {
  let cars = useCars()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleIsModalVisible = (bool) => {
    setIsModalVisible(bool)
  }

  return (
    <Layout style={{minHeight: '100vh'}} className="layout">
    <Header className='body_header_wrapper' style={{padding: 0}}>
      <div className='body_header'>
        <Button onClick={showModal} type='primary'>
          List Car
          <PlusCircleOutlined />
        </Button>
        <AddCarModal isModalVisible={isModalVisible} handleIsModalVisible={handleIsModalVisible}/>
      </div>
    </Header>

    <Content className='body_content'>
      <div className="site-layout-content body_list">
        <CarList cars={cars}/>
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Car Listing ©2022 Created by Umut Baris Arabasuren</Footer>
  </Layout>
  );
}

export default App;
