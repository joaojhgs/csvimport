import { Form, Input, Layout } from "antd";
import { useEffect, useState } from "react";
import CardsSection from "../components/CardsSection";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
import UploadComponent from "../components/UploadComponent";
const { Content } = Layout;

const MainPage = () => {
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);
    const [form] = Form.useForm();
    const getUserData = (query?: string) => {
        axios.get<IUser[]>(`${process.env.REACT_APP_API_URL}/api/users${query ? `?q=${query}` : ''}`).then((response) => {
            setFilteredCards(response.data);
        })
    };
    const onValuesChange = (value: { search: string }) => {
        getUserData(value.search);
    };

    useEffect(() => {
        getUserData();
    }, [])
    return (
        <Content>
            <Form form={form} onValuesChange={onValuesChange} >
                <div className="mainPageContent">
                    <div className="mainPageheader">
                        <Form.Item name='search' noStyle>
                            <Input
                                placeholder="Search cards..."
                                allowClear
                                size="large"
                            />
                        </Form.Item>
                        <div style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '5px' }}>
                            <UploadComponent getUserData={getUserData} />
                        </div>
                    </div>
                    <CardsSection filteredCards={filteredCards} />
                </div>
            </Form>
        </Content>
    )
}

export default MainPage;