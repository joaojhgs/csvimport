import { IUser } from "../utils/interfaces"
import CardsList from "./CardsList"
import EmptyComponent from "./EmptyComponent"

interface ICardSection { 
    filteredCards: IUser[],
}

const CardsSection = ({ filteredCards }: ICardSection) => {
    return (
        <div className="mainPageCards">
            {filteredCards.length > 0 ? <CardsList items={filteredCards} /> : <EmptyComponent/>}
        </div>
    )
}

export default CardsSection;