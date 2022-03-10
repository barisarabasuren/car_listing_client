import { CheckCircleTwoTone } from "@ant-design/icons";
import { Spin } from "antd";
import './loadingSpinner.css'

const LoadingSpinner = ({ loadingSpinner }) => {

    if(loadingSpinner === 'hold') {
        return(
            <div></div>
        )
    }
    else if(loadingSpinner === 'spin') {
        return(
            <div className="spinner_container">
                <div>
                    <div className="spinner_inner">
                        <Spin size="large" />
                        <p>Car is being listed...</p>
                    </div>
                </div>
            </div>
        )
    }
    else if(loadingSpinner === 'success') {
        return(
            <div className="spinner_container">
                <div className="spinner_inner">
                    <CheckCircleTwoTone style={{ fontSize: '50px'}}/>
                    <p>Your car has been listed!</p>
                    <p>Please, wait for refresh...</p>
                </div>
            </div>
        )
    }
}

export default LoadingSpinner;