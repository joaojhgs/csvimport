import { Empty } from "antd"

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
        >
        </Empty>
    )
}

export default EmptyComponent;