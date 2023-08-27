import { Button, Upload, UploadProps, notification } from "antd";
import axios from 'axios';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'

interface IUploadComponent { getUserData: (query?: string) => void, dragger: boolean }

const UploadComponent = ({ getUserData, dragger }: IUploadComponent) => {
    const [api, contextHolder] = notification.useNotification();
    const { Dragger } = Upload;
    const uploadProps: UploadProps = {
        name: 'file',
        accept: 'text/csv',
        showUploadList: false,
        customRequest: (data) => {
            axios.post('http://localhost:3000/api/files', { file: data.file }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                api.success({ message: 'File uploaded successfully', placement: 'bottomRight' });
                getUserData();
            }).catch(err => {
                api.error({ message: err.message, placement: 'bottomRight' });
            });
        },
    };
    if (dragger) return (
        <div  className="uploadComponent">
            {contextHolder}
            <Dragger {...uploadProps}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
        </div>
    )
    return (
        <>
            {contextHolder}
            <Upload {...uploadProps}>
                <Button size='large' icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </>
    )
}

export default UploadComponent;