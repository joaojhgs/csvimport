import { Card, Empty, List } from "antd"
import { IUser } from "../utils/interfaces"
import {AimOutlined, FlagOutlined, StarOutlined} from "@ant-design/icons"

const Cards = ({ filteredCards }: { filteredCards: IUser[] }) => {

    const cards = <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
        }}
        pagination={
            {align: 'center'}
        }
        dataSource={filteredCards}
        renderItem={(item) => (
            <List.Item>
                <Card title={item.name} hoverable>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <AimOutlined />
                                }
                                title="City"
                                description={item.city}
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <FlagOutlined />
                                }
                                title="Country"
                                description={item.country}
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <StarOutlined />
                                }
                                title="Favorite sport"
                                description={item.favorite_sport}
                            />
                        </List.Item>
                    </List>
                </Card>
            </List.Item>
        )}
    />
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
        <div className="mainPageCards">
            {filteredCards.length > 0 ? cards : <EmptyComponent />}
        </div>
    )
}

export default Cards;