import { Form, Input, Layout } from "antd";
import { useEffect, useState } from "react";
import CardsSection from "../components/CardsSection";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
import UploadComponent from "../components/UploadComponent";
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);
    const [form] = Form.useForm();
    const getUserData = (query?: string) => {
        axios.get<IUser[]>(`http://localhost:3000/api/users${query ? `?q=${query}` : ''}`).then((response) => {
            setFilteredCards(response.data);
        })
    };
    const onValuesChange = (value: {search: string}) => {
        getUserData(value.search);
    };

    useEffect(() => {
        getUserData();
    }, [])
    return (
        <Content>
            <Form form={form} onValuesChange={onValuesChange}>
                <div className="mainPageContent">
                    <div className="mainPageheader">
                        <Form.Item name='search' noStyle>
                            <Search
                                placeholder="Search cards..."
                                allowClear
                                enterButton="Search"
                                size="large"
                            />
                        </Form.Item>

                    </div>
                    <CardsSection filteredCards={filteredCards} />
                    <UploadComponent dragger getUserData={getUserData} />
                </div>
            </Form>
        </Content>
    )
}

export default MainPage;