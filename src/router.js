import React from 'react'
import { Route } from 'react-router-dom'
import RegisterApp from './components/Register/App'

const router = () => (
    <div>
        <Route exact path="/" component={Register} />
        <Route path="/Register" component={Register} />
    </div>
)

const Register = () => (
    <RegisterApp />
)

export default router