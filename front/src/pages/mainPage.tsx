import { Input, Layout } from "antd";
import { useEffect, useState } from "react";
import CardsSection from "../components/CardsSection";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);
    const getUserData = (query?: string) => {
        axios.get<IUser[]>(`http://localhost:3000/api/users${query ? `?q=${query}` : ''}`).then((response) => {
            setFilteredCards(response.data);
        })
    };
    const handleSearch = (value: string) => {
        setSearchText(value);
        getUserData(value);
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