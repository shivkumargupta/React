import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (<header>
            <nav>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/About">About</Link>
                <Link to="/Home">Home</Link>
            </nav>
        </header>
        )
    }
}
export default Header;