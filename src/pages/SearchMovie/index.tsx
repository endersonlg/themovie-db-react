import { Input } from 'antd';
import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ListMovie from '../../components/ListMovie';

// import { Container } from './styles';

const SearchMovie: React.FC = () => {
    const [text, setText] = useState<string>('');
    return (
        <>
            <Breadcrumbs
                paths={[
                    {
                        label: 'Home',
                        link: '/',
                    },
                    {
                        label: 'Search',
                    },
                ]}
            />
            <Input
                placeholder="Search Movie: Ex: Avengers..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                size={'large'}
                style={{ marginBottom: 10, marginTop: 5 }}
            />
            <ListMovie
                linkApi={`/search/movie?`}
                title={`Search Movie: ${text}`}
                query={text}
            />
        </>
    );
};

export default SearchMovie;
