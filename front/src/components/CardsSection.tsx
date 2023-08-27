import { IUser } from "../utils/interfaces"
import CardsList from "./CardsList"
import EmptyComponent from "./EmptyComponent"


const CardsSection = ({ filteredCards }: { filteredCards: IUser[] }) => {
    return (
        <div className="mainPageCards">
            {filteredCards.length > 0 ? <CardsList items={filteredCards} /> : <EmptyComponent />}
        </div>
    )
}

export default CardsSection;