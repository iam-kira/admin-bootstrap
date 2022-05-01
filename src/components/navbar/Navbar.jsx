import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubble";
import ListOutlinedIcon from "@mui/icons-material/List";



const Navbar = () => {
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
						<DarkModeOutlinedIcon className='icon' />
					</div>
					<div className="item">
						<FullscreenExitOutlinedIcon className='icon' />
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className='icon' />
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