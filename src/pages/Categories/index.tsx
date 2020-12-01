import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import api from '../../service/api';
import { Category } from '../types';
import { ContainerCategories } from './styles';

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>();
    useEffect(() => {
        (async () => {
            const { data } = await api.get('/genre/list');
            const genres: Category[] = data.genres;
            setCategories(genres);
        })();
    }, []);
    return (
        <>
            <Breadcrumbs
                paths={[
                    {
                        label: 'Home',
                        link: '/',
                    },
                    {
                        label: 'Categories',
                    },
                ]}
            />
            <h2>Select Category</h2>
            <ContainerCategories>
                <Row gutter={12} justify={'center'}>
                    {categories?.map((category) => (
                        <Col key={category.id}>
                            <Button
                                size={'large'}
                                style={{ width: 200, marginBottom: 5 }}
                            >
                                <Link to={`/list-category/${category.id}`}>
                                    {category.name}
                                </Link>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </ContainerCategories>
        </>
    );
};

export default Categories;
