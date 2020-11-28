import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import ListMovie from '../../components/ListMovie';
import api from '../../service/api';
import { Category } from '../types';

type MatchParams = {
    id: string;
};

type MatchProps = RouteComponentProps<MatchParams>;

const ListCategory: React.FC<MatchProps> = ({ match }) => {
    const { id } = match.params;
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/genre/${id}`);
            setCategory(data);
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
                        link: '/categories',
                    },
                    {
                        label: category?.name,
                    },
                ]}
            />
            <ListMovie
                linkApi={`/discover/movie?with_genres=${id}`}
                title={category?.name}
            />
        </>
    );
};

export default ListCategory;
