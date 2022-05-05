import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart1 from '../../components/chart/Chart1'
// import Chart2 from '../../components/chart/Chart2'
// import Chart3 from '../../components/chart/Chart3'
// import Chart4 from '../../components/chart/chart4'
import List from '../../components/table/Table'
import { Fab } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            <Fab color="secondary" size="small" aria-label="edit"><EditIcon /></Fab>
                        </div>
                        <h1 className="title">Info</h1>
                        <div className="item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg/640px-Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Keanu Reeves</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">keanureeves@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+1 1234567890</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Everyone knows</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart1 aspect={3 / 1} title="User Spending" />
                        {/* <Chart2 aspect={2 / 1} title="User's Knowledge" /> */}
                        {/* <Chart3 aspect={2 / 1} title="User's Knowledge" /> */}
                        {/* <Chart4 aspect={2 / 1} title="User's Knowledge" /> */}
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">Last Transactions</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single

