import { Card } from "antd"
import { IUser } from "../utils/interfaces"

const Cards = ({ filteredCards }: { filteredCards: IUser[] }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {filteredCards.map((card, index) => (
                <Card key={index} title={card.name}>
                    {card.city}
                </Card>
            ))}
        </div>
    )
}

export default Cards;