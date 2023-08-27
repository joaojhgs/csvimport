import { AimOutlined, FlagOutlined, StarOutlined } from "@ant-design/icons"
import { Card, List } from "antd"
import { IUser } from "../utils/interfaces";

const CardsList = ({items}: {items: IUser[]}) => {
    return (
        <List
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
                { align: 'center' }
            }
            dataSource={items}
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
    )
}

export default CardsList;