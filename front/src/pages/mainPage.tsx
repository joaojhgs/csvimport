import { Input, Layout } from "antd";
import { useEffect, useState } from "react";
import Cards from "../components/cards";
import { IUser } from "../utils/interfaces";
import axios from 'axios';
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCards, setFilteredCards] = useState<IUser[]>([]);

    const handleSearch = (value: string) => {
        // const filtered = initialCards.filter(card =>
        //     card.name.toLowerCase().includes(value.toLowerCase())
        // );
        // setSearchText(value);
        // setFilteredCards(filtered);
    };

    useEffect(() => {
        axios.get<IUser[]>('http://localhost:3000/api/users', {}).then((response) => {
            console.log(response);
            setFilteredCards(response.data);
        })
    }, [])
    return (
        <Content style={{ padding: '0 50px', width: '100%', height: '100%' }}>
            <div style={{ padding: '20px' }}>
                <Search
                    placeholder="Search cards..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onSearch={handleSearch}
                />
                <Cards filteredCards={filteredCards} />
            </div>
        </Content>
    )
}

export default MainPage;