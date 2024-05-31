import {NavLink, Outlet} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import css from './Navigation.module.css'


export default function Navigation () {
    return (
        <header className='container'>
            <nav className={css.nav}>
            <NavLink to="/" end className={css.navLink} activeClassName='active'>
                Home
            </NavLink>
            <NavLink to="/movies" className={css.navLink} activeClassName='active'>
                Movies
            </NavLink>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
            </nav>
        </header>
    )
}