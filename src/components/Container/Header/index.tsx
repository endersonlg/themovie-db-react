import React from 'react';
import { Layout } from 'antd';

import { ContainerHeader } from './styled';

const Header: React.FC = () => {
    return (
        <Layout.Header style={{ height: 300, padding: 0 }}>
            <ContainerHeader />
        </Layout.Header>
    );
};

export default Header;
