import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';

import ListMovie from '../../components/ListMovie';

const Dashboard: React.FC = () => (
    <>
        <Breadcrumbs
            paths={[
                {
                    label: 'Home',
                    link: '/',
                },
            ]}
        />
        <ListMovie
            linkApi={'/discover/movie?sort_by=popularity.desc'}
            title={'Popular Movies'}
        />
    </>
);

export default Dashboard;
