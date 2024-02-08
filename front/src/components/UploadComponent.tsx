import { Button, Upload, UploadProps, notification } from "antd";
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons'

interface IUploadComponent { getUserData: (query?: string) => void}

const UploadComponent = ({ getUserData}: IUploadComponent) => {
    const [api, contextHolder] = notification.useNotification();
    const uploadProps: UploadProps = {
        name: 'file',
        accept: 'text/csv',
        showUploadList: false,
        customRequest: (data) => {
            axios.post(`${process.env.REACT_APP_API_URL}/api/files`, { file: data.file }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                api.success({ message: 'File uploaded successfully', placement: 'bottomRight' });
                getUserData();
            }).catch(err => {
                console.log(err)
                api.error({ message: err.response.data.message, placement: 'bottomRight' });
            });
        },
    };
    return (
        <>
            {contextHolder}
            <Upload {...uploadProps}>
                <Button size='middle' icon={<UploadOutlined />} type="primary">Upload</Button>
            </Upload>
        </>
    )
}

export default UploadComponent;