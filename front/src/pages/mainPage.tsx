import { Input, Layout } from "antd";
import { useState } from "react";
import Cards from "../components/cards";
import { IUser } from "../utils/interfaces";
const { Search } = Input;
const { Content } = Layout;

const MainPage = () => {
    const initialCards: IUser[] = [
        {
            name: 'John Doe',
            city: 'New York',
            country: 'USA',
            favorite_sport: 'Basketball'
        },
        {
            name: 'Jane Smith',
            city: 'London',
            country: 'UK',
            favorite_sport: 'Football'
        },
        {
            name: 'Mike Johnson',
            city: 'Paris',
            country: 'France',
            favorite_sport: 'Tennis'
        },
        {
            name: 'Karen Lee',
            city: 'Tokyo',
            country: 'Japan',
            favorite_sport: 'Swimming'
        },
        {
            name: 'Tom Brown',
            city: 'Sydney',
            country: 'Australia',
            favorite_sport: 'Running'
        },
        {
            name: 'Emma Wilson',
            city: 'Berlin',
            country: 'Germany',
            favorite_sport: 'Basketball'
        }
    ];
    const [searchText, setSearchText] = useState('');
    const [filteredCards, setFilteredCards] = useState<IUser[]>(initialCards);

    const handleSearch = (value: string) => {
        const filtered = initialCards.filter(card =>
            card.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchText(value);
        setFilteredCards(filtered);
    };
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