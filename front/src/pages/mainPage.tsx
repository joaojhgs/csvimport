import { Button, Input, Layout, Upload, UploadProps, notification } from "antd";
import { useEffect, useState } from "react";
import CardsSection from "../components/CardsSection";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);
    const getUserData = () => {
        axios.get<IUser[]>('http://localhost:3000/api/users').then((response) => {
            console.log(response);
            setFilteredCards(response.data);
        })
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
        <Content>
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
                    
                </div>
                <CardsSection filteredCards={filteredCards} />
            </div>
        </Content>
    )
}

export default MainPage;