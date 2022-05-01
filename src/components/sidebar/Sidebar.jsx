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


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    admin
                </span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <li><PersonIcon className="icon" /><span>Users</span></li>
                    <li><ShoppingCartRoundedIcon className="icon" /><span>Products</span></li>
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
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                {/* <div className="colorOption"></div> */}
            </div>
        </div>
    )
}

export default Sidebar
