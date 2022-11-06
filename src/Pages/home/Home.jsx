import React from 'react'
import './Home.scss';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';



const Home = () => {


	return (
		<div className='home'>
			<Sidebar></Sidebar>
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earnings" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1}title={"Last 6 months Grinding"}/>
				</div>
				<div className="listContainer">
					<div className="listTitle">Latest Workouts</div>
					<Table />
				</div>
			</div>
		</div>
	)
}

export default Home

