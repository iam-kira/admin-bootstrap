import React from 'react'
import './Navbar.scss'
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExit";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubble";
import ListOutlinedIcon from "@mui/icons-material/List";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNone";
// import Notifications from 'react-notifications-menu';
import Notification from './Notification';


const DEFAULT_NOTIFICATION = {
	image:
		"https://images.immediate.co.uk/production/volatile/sites/3/2019/08/Keanu-Reeves-5939c06.jpg?quality=90&resize=980,654",
	message: "Notification one.",
	detailPage: "/events",
	receivedTime: "12h ago"
};

const Navbar = () => {

	const { dispatch } = useContext(DarkModeContext)
	const [data, setData] = useState([DEFAULT_NOTIFICATION]);

	return (
		<div className='navbar'>
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder='Search...' />
					<SearchOutlinedIcon className='icon' />
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlinedIcon className='icon' />Eng
					</div>
					<div className="item">
						<DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "CUSTOM" })} />
					</div>
					<div className="item">
						<FullscreenExitOutlinedIcon className='icon' />
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className='icon'
						/>

						{/* <Notifications
							headerBackgroundColor='red'
							data={data}
							header={{
								title: "Notifications",
								option: { text: "View All", onClick: () => console.log("Clicked") }
							}}
							markAsRead={(data) => {
								console.log(data);
							}}
						/> */}
						{/* <Notification /> */}
						<div className="counter">1</div>
					</div>

					<div className="item">
						<ChatBubbleOutlinedIcon className='icon' />
						<div className="counter">2</div>

					</div>
					{/* <div className="item">
						<DarkModeOutlinedIcon className='icon' />
					</div> */}
					<div className="item">
						<ListOutlinedIcon className='icon' />
					</div>
					<div className="item">
						<img
							src="https://i.pinimg.com/originals/62/d2/69/62d26921ca6f2e23da985daae94ec58e.jpg"
							alt="John wick"
							className="avatar" />

					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar