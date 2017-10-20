import React, { Component } from 'react'
import { NavLink, Route, Link } from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
    render() {
        const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
                <li className={match ? 'active' : ''}>
                    <Link to={to}>{label}</Link>
                </li>
            )} />
        )

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <a className="navbar-brand" href="#">Blog React</a>
                <ul className="nav navbar-nav">
                    {/* <li>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>
                    </li> */}
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/posts" label="Posts" />
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/contact" label="Contact" />
                    
                </ul>
            </nav>
        )
    }
}

export default Nav