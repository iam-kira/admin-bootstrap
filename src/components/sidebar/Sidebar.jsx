import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import RestorePageRoundedIcon from '@mui/icons-material/RestorePageRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">
                        Admin
                    </span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                    <li><PersonIcon className="icon" /><span>Users</span></li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                    <li><ShoppingCartRoundedIcon className="icon" /><span>Products</span></li>
                    </Link>
                    <li><CreditCardRoundedIcon className="icon" /><span>Orders</span></li>
                    <p className="title">SERVICES</p>
                    <li><NotificationsIcon className="icon" /><span>Notification</span></li>
                    <p className="title">OK</p>
                    <li><HealthAndSafetyIcon className="icon" /><span>SystemHealth</span></li>
                    <li><RestorePageRoundedIcon className="icon" /><span>Logs</span></li>
                    <li><SettingsIcon className="icon" /><span>Settings</span></li>
                    <p className="title">USERS</p>
                    <li><AccountCircleIcon className="icon" /><span>Profile</span></li>
                    <li><LogoutRoundedIcon className="icon" /><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
                {/* <div className="colorOption"></div> */}
            </div>
        </div>
    )
}

export default Sidebar
