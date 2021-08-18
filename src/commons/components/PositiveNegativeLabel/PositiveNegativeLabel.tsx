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
    const numberValue = +value;
    const Icon: FunctionComponent<IconProps> = ({value}) => value < 0 ? <CaretDownOutlined data-testid='down-icon' /> : <CaretUpOutlined data-testid='up-icon'/>;
    const val = Math.abs(numberValue);
    const className =  numberValue < 0 ? 'negative-typography' : 'positive-typography';
    return (
        <div>
            <Text className={className}>{<Icon value={numberValue}/>}<Text>{val}{suffix}</Text></Text>
        </div>
    )
}

export default PositiveNegativeLabel;