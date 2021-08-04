import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import Body from './Body';
import Header from './Header';

const Container: React.FC = ({ children }) => {
    return (
        <Layout style={{ height: '100%' }}>
            <SideBar />
            <Layout>
                <Header />
                <>
                    <Body>{children}</Body>
                </>
            </Layout>
        </Layout>
    );
};

export default Container;
