import React from 'react'
import { createRoute } from 'atomic-router'
import { Link } from 'atomic-router-react'

const route = createRoute()
const toLogin = createRoute()
const toNotFound = createRoute()

const Page = () => {
    return (
        <div>
            <h1>Index page</h1>
            <div>
                <Link to={toLogin}>go to login</Link>
            </div>
            <div>
                <Link to={toNotFound}>go to not found</Link>
            </div>
        </div>
    )
}

export const Index = {
    route,
    toNotFound,
    toLogin,
    Page,
}
