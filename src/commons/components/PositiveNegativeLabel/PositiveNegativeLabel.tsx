import React, { FunctionComponent } from "react";
import { Typography } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import './PositiveNegativeLabel.css'
const { Text } = Typography;

interface IconProps {
    value: number
}

interface PositiveNegativeLabelProps {
    value: number | string
    suffix?: string
}

const PositiveNegativeLabel: FunctionComponent<PositiveNegativeLabelProps> = ({value, suffix}) => {
    const Icon: FunctionComponent<IconProps> = ({value}) => value < 0 ? <CaretDownOutlined /> : <CaretUpOutlined />;
    const val = Math.abs(+value);
    const className =  +value < 0 ? 'negative-typography' : 'positive-typography';
    return (
        <div>
            <Text className={className}>{<Icon value={+value}/>}{val}{suffix}</Text>
        </div>
    )
}

export default PositiveNegativeLabel;