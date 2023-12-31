import React from 'react'
import { createRoute } from 'atomic-router'
import { Link } from 'atomic-router-react'

const route = createRoute()
const goToIndex = createRoute()

const Page = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <Link to={goToIndex}>Go Back</Link>
            </div>
            <div>
                <input type="email" placeholder="email" name="email" />
            </div>
            <div>
                <input type="password" placeholder="password" name="password" />
            </div>
            <div>
                <button>submit</button>
            </div>
        </div>
    )
}

export const Login = {
    route,
    goToIndex,
    Page,
}
