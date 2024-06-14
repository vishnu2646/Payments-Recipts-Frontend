import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {

    const location = useLocation();

    const isActive = (path: any) => {
        return location.pathname === path;
    };

    return (
        <div className='sidebar'>
            <div className="d-flex mt-2 justify-content-center bg-white">
                <p>KDDA</p>
            </div>
            <div className="links">
                <Link to={'/'}>
                    <li className={`link ${isActive("/") && "active"} rounded`}>
                        <i className="fa-solid fa-house"></i>
                    </li>
                </Link>
                <Link to={'/income'}>
                    <li className={`link ${isActive("/income") && "active"} rounded`}>
                        <i className="fa-solid fa-table-cells"></i>
                    </li>
                </Link>
                <li className="link rounded">
                    <i className="fa-solid fa-gears"></i>
                </li>
                <li className="link rounded">
                    <i className="fa-solid fa-right-from-bracket"></i>
                </li>
            </div>
        </div>
    )
}

export default Sidenav