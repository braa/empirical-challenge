import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import LeftMenu from './LeftMenu';
import AppHeader from './AppHeader';
import './Dashboard.css';

const { Header, Content } = Layout;

const Dashboard: FunctionComponent = () => (
    <Layout>
        <Header className="header"><AppHeader/></Header>
      <Layout>
        <Content><LeftMenu/></Content>
      </Layout>
    </Layout>
);

export default Dashboard