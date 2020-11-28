import React from 'react';
import { Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../../../redux/reducers/menuState';
import { SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { LogoContainer } from './style';
import logo from '../../../assets/logo.jpg';

const SideBar: React.FC = () => {
    const { isOpen } = useSelector((state: RootState) => state.menu);
    const dispatch = useDispatch();
    const onCollapse = () => {
        isOpen ? dispatch(close()) : dispatch(open());
    };
    return (
        <Layout.Sider collapsible collapsed={isOpen} onCollapse={onCollapse}>
            <Link to="/">
                <LogoContainer collapsed={isOpen}>
                    <img src={logo} width={60} alt="Intranet Dom pedro" />
                    <div className="tituloLogo">
                        <h1>The Movie DB</h1>
                        <p>Enderson</p>
                    </div>
                </LogoContainer>
            </Link>
            <Menu theme="dark" mode="vertical-left" defaultSelectedKeys={['0']}>
                <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                    <Link to="/categories">Categories</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<SearchOutlined />}>
                    <Link to="/search-movie">Search Movie</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;
