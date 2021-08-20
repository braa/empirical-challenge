import React, { FunctionComponent } from 'react';
import { Tabs } from 'antd';
import Cryptocurrencies from '../pages/Criptocurrencies/Cryptocurrencies';
import Converter from '../pages/Converter/Converter';
import Charts from '../pages/Charts';
import Optional from '../pages/Optional';
const { TabPane } = Tabs;

interface SideOptions {
  label: string;
  Component: FunctionComponent
}

const options: Array<SideOptions> = [
  {
    label: 'Cryptocurrencies',
    Component: Cryptocurrencies
  },
  {
    label: 'Converter',
    Component: Converter
  },
  {
    label: 'Charts',
    Component: Charts
  },
  {
    label: 'Optional',
    Component: Optional
  },
];

const LeftMenu: FunctionComponent = () => {
    return (
      <div>
        <Tabs defaultActiveKey="Cryptocurrencies" tabPosition={'left'}>
          {options.map(({label, Component}: SideOptions)=> (
            <TabPane tab={label} key={label}>
              <Component/>
            </TabPane>
          ))}
         
        </Tabs>
      </div>
    );
}

export default LeftMenu;