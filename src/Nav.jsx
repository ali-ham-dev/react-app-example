import React from 'react'
import './Nav.css'

const Menu = () => {
    return (
        <div></div>
    );
}

const SearchBox = () => {
    return (
        <div className="search-box">
            <button></button>
            <input placeholder='Search'></input>
            <button></button>
            <button></button>
        </div>
    );
}

const QuickAccess = () => {
    return (
        <div></div>
    );
}

const Nav = () => {
    return (
        <div>
            <Menu />
            <SearchBox />
            <QuickAccess />
            This is a react part. 
        </div>
    );
}

export default Nav;