import { List } from "antd"
import { IUser } from "../utils/interfaces";
import CardItem from "./CardItem";

const CardsList = ({ items }: { items: IUser[] }) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5,
            }}
            style={{ width: '100%' }}
            pagination={
                { align: 'center' }
            }
            size="large"
            dataSource={items}
            renderItem={(item) => (
               <CardItem item={item} />
            )}
        />
    )
}

export default CardsList;