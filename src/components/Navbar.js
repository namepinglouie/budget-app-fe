import {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <nav>
                <h1 className="nav-title"><Link to = "/">Budget App</Link></h1>
                <div className="nav-links">
                    <button><Link to = "/transactions">Show Transaction</Link></button>
                    <button><Link to = "/transactions/new">New Transaction</Link></button>
                </div>
            </nav>
        )
    }
}

export default Navbar;