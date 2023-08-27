import { Button, Input, Layout, Upload, UploadProps, notification } from "antd";
import { useEffect, useState } from "react";
import Cards from "../components/cards";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);
    const [api, contextHolder] = notification.useNotification();
    const getUserData = () => {
        axios.get<IUser[]>('http://localhost:3000/api/users').then((response) => {
            console.log(response);
            setFilteredCards(response.data);
        })
    };
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
    const handleSearch = (value: string) => {
        // const filtered = initialCards.filter(card =>
        //     card.name.toLowerCase().includes(value.toLowerCase())
        // );
        // setSearchText(value);
        // setFilteredCards(filtered);
    };

    useEffect(() => {
        getUserData();
    }, [])
    return (
        <Content >
            {contextHolder}
            <div className="mainPageContent">
                <div className="mainPageheader">
                    <Search
                        placeholder="Search cards..."
                        allowClear
                        enterButton="Search"
                        size="large"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        onSearch={handleSearch}
                    />
                    <Upload {...uploadProps}>
                        <Button size='large' icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </div>
                <Cards filteredCards={filteredCards} />
            </div>
        </Content>
    )
}

export default MainPage;