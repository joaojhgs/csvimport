import { Card, Empty } from "antd"
import { IUser } from "../utils/interfaces"

const Cards = ({ filteredCards }: { filteredCards: IUser[] }) => {

    const cards = filteredCards.map((card, index) => (
        <Card key={index} title={card.name}>
            {card.city}
        </Card>
    ))
    const EmptyComponent = () => {
        return (
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60, marginTop: 'auto', marginBottom: 'auto' }}
                description={
                    <span>
                        No results found
                    </span>
                }
            />
        )
    }
    return (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', height: '100%' }}>
            {filteredCards.length > 0 ? cards : <EmptyComponent />}
        </div>
    )
}

export default Cards;