import React from 'react'
import { Route, RouterProvider } from 'atomic-router-react'
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { NotFound } from '../pages/not-found'
import { Index } from '../pages'
import { createRoutesView } from 'atomic-router-react/scope'
import { Login } from '../pages/login'

export const history = createBrowserHistory()

export const router = createHistoryRouter({
    routes: [
        {
            path: '/',
            route: [Index.route, NotFound.backToHomeRoute, Login.goToIndex],
        },
        {
            path: '/login',
            route: [Login.route, Index.toLogin],
        },
        { path: '/not-found', route: [NotFound.route, Index.toNotFound] },
    ],
    notFoundRoute: NotFound.route,
})

router.setHistory(history)

const Routes = createRoutesView({
    routes: [
        { route: Index.route, view: Index.Page },
        { route: Login.route, view: Login.Page },
        { route: NotFound.route, view: NotFound.Page },
    ],
    otherwise: () => (
        <div>
            <h1>Resource not founded</h1>
        </div>
    ),
})

export const App = () => {
    return (
        <RouterProvider router={router}>
            {/* <Routes /> */}
            <Route route={Index.route} view={Index.Page} />
            <Route route={Login.route} view={Login.Page} />
            <Route route={NotFound.route} view={NotFound.Page} />
        </RouterProvider>
    )
}
