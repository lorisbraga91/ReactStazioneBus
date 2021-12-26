import React from "react";
import Card from '../'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
                <span className="navbar-brand mb-1 h1" style={{ paddingLeft: '5px' }}>MyBus</span>
            </nav>
        );
    }
}

export default Navbar;


