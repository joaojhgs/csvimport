import { List, Card, Form } from "antd"
import { IUser } from "../utils/interfaces"
import { AimOutlined, FlagOutlined, StarOutlined } from "@ant-design/icons"
import Highlighter from "react-highlight-words";

interface ICardItem {
    item: IUser;
}

const CardItem = ({ item }: ICardItem) => {
    const form = Form.useFormInstance()
    const searchWord = Form.useWatch('search', form)
    return (
        <List.Item >
            <Card 
                title={
                    <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[searchWord]}
                        autoEscape={true}
                        textToHighlight={item.name}
                    />
                }
                hoverable
            >
                <List>
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <AimOutlined />
                            }
                            title="City"
                            description={
                                <Highlighter
                                    highlightClassName="YourHighlightClass"
                                    searchWords={[searchWord]}
                                    autoEscape={true}
                                    textToHighlight={item.city}
                                />
                            }
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <FlagOutlined />
                            }
                            title="Country"
                            description={<Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[searchWord]}
                                autoEscape={true}
                                textToHighlight={item.country}
                            />}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <StarOutlined />
                            }
                            title="Favorite sport"
                            description={<Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[searchWord]}
                                autoEscape={true}
                                textToHighlight={item.favorite_sport}
                            />}
                        />
                    </List.Item>
                </List>
            </Card>
        </List.Item>
    )
}

export default CardItem;