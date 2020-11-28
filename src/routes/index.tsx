import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';
import ListCategory from '../pages/ListCategory';
import MovieIndex from '../pages/MovieIndex';
import SearchMovie from '../pages/SearchMovie';

const Routes = () => {
    return (
        <Container>
            <Switch>
                <Route path={'/movie/:id'} component={MovieIndex} />
                <Route path={'/categories'} component={Categories} />
                <Route path={'/list-category/:id'} component={ListCategory} />
                <Route path={'/search-movie'} component={SearchMovie} />
                <Route path={'/'} component={Dashboard} />
            </Switch>
        </Container>
    );
};
export default Routes;
