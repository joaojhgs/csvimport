import React, { useState } from 'react';
import { ConfigProvider, Layout, theme, Input, Card } from 'antd'
const { Search } = Input;
const { Content, Footer } = Layout;
const initialCards = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
];
const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCards, setFilteredCards] = useState(initialCards);

  const handleSearch = (value: string) => {
    const filtered = initialCards.filter(card =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    setFilteredCards(filtered);
  };
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: { colorPrimary: '#00b96b' } }}>
      <Layout className="layout" style={{ width: '100vw', height: '100vh' }}>
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
            <div style={{ marginTop: '20px' }}>
              {filteredCards.map((card, index) => (
                <Card key={index} title={card.title}>
                  {card.content}
                </Card>
              ))}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Joaojhgs ©2023</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;