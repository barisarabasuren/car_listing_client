import { Button, DatePicker, Form, Input, InputNumber, message, Select } from "antd";
import moment from 'moment';
import { useState } from "react";

const AddCarForm = ({ handleCarChange, handleCancel }) => {
    const [isLoading, setIsLoading] = useState(false)

    const layout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 19,
        },
    };

    function disabledDate(current) {
        return current && current > moment().endOf('day').year('2022');
    }

    const validateImg = async (img) => {
        if(img === undefined || img === '') {
            return true
        } else {
            try{
                const res = await fetch(img)
                const buff = await res.blob()
        
                return buff.type.startsWith('image/')
            }
            catch{
                return false
            }
        }
    }

    const onFinish = async(values) => {
        setIsLoading(true)
        const isImgValid = await validateImg(values.car.img)
        if(isImgValid){
            handleCarChange(values.car)
        } else {
            message.error('Image url is not valid')
            setIsLoading(false)
        }
    };

    return(
        <Form
            {...layout}
            name="car"
            onFinish={onFinish}
        >
            <Form.Item
                name={['car', 'make']}
                label="Make"
                rules={[
                    {
                    required: true,
                    message: 'Make is required'
                    },
                ]}
            >
                <Select placeholder="Select make" allowClear>
                    <Select.Option value="BMW">BMW</Select.Option>
                    <Select.Option value="Peugeot">Peugeot</Select.Option>
                    <Select.Option value="Fiat">Fiat</Select.Option>
                    <Select.Option value="Kia">Kia</Select.Option>
                    <Select.Option value="Toyota">Toyota</Select.Option>
                    <Select.Option value="Chevrolet">Chevrolet</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name={['car', 'model']}
                label="Model"
                rules={[
                    {
                    required: true,
                    message: 'Model is required'
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                name={['car', 'price']}
                label="Price"
                rules={[
                    {
                    required: true,
                    type: 'number',
                    message: 'Price is required'
                    },
                ]}
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
                >
                <InputNumber addonAfter="€"/>
            </Form.Item>
            <Form.Item
                name={['car', 'year']}
                label="Year"
                rules={[
                    {
                    required: true,
                    message: 'Year is required'
                    },
                ]}
            >
                <DatePicker picker="year" format="YYYY" disabledDate={disabledDate}/>
            </Form.Item>
            
            <Form.Item 
                name={['car', 'email']} 
                label="Email"
                rules={[
                    {
                    required: true,
                    message: 'Email is required',
                    type: 'email'
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item name={['car', 'img']} label="Image">
                <Input />
            </Form.Item>
            <Form.Item 
                name={['car', 'description']} 
                label="Description"
                rules={[
                    {
                    required: true,
                    message: 'Description is required'
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{span: 19, offset: 5 }}>
                <Button type="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button loading={isLoading} type="primary" style={{marginLeft: 10}} htmlType="submit">
                    List Car
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddCarForm