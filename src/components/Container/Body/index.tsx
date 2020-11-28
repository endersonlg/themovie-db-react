import { Layout } from 'antd';
import React from 'react';

const Body: React.FC = ({ children }) => {
    return (
        <Layout.Content style={{ margin: '24px 16px 0' }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                {children}
            </div>
        </Layout.Content>
    );
};

export default Body;
