import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '../MuiCompos'
import { logout, toggleDarkMode } from '../Redux';

const TopNav = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mode } = useSelector((state: any) => state.darkMode);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(logout({}))
        navigate('/login');
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleMode = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div className={`topNav ${mode ? `dark` : `light`}`}>
            <div className="container">
                <div className="left">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="right">
                    <input type="text" name="" className='search form-control' placeholder="Enter text to search" id="" />
                    {mode && <i className="fa-solid fa-moon" onClick={() => handleMode()}></i>}
                    {!mode && <i className="fa-solid fa-sun" onClick={() => handleMode()}></i>}
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-ellipsis" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></i>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    <MenuItem onClick={() => {}}>Profile</MenuItem>
                    <MenuItem onClick={() => {}}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default TopNav