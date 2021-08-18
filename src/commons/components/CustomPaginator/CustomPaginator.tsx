import { FunctionComponent } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


interface CustomPaginatorProps {
    page: number
    disableLeft?: boolean
    disableRight?: boolean
    onChange: (page: number) => void
}

const CustomPaginator: FunctionComponent<CustomPaginatorProps> = ({page, disableLeft, disableRight, onChange}) => {
    return (
        <>
            <Button disabled={disableLeft}><LeftOutlined onClick={()=>onChange(page-1)} disabled/></Button>
            <Button>{page}</Button>
            <Button disabled={disableRight}><RightOutlined onClick={()=>onChange(page+1)} /></Button>
        </>
    )
}

export default CustomPaginator;