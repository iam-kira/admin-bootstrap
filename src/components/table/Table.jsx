import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

    const rows = [
        {
            id: 1231,
            product: "Keanu Reeves",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg/640px-Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg",
            customer: "John Wick",
            date: "12 September 1964",
            amount: 785,
            method: "Offline",
            status: "Ongoing"
        },
        {
            id: 1232,
            product: "John Wick",
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0l5fuKfa2dQBtNqViR1Haj9JpYl4xRtaMasZyv1fLodr9WHsa",
            customer: "Keanu Reeves",
            date: "14 November 2014",
            amount: 8.6,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 1233,
            product: "John Wick: Chapter 2",
            img: "https://www.dvdsreleasedates.com/posters/800/J/John-Wick-Chapter-Two-2017-movie-poster.jpg",
            customer: "Keanu Reeves",
            date: "17 February 2017",
            amount: 17.15,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 1234,
            product: "John Wick: Chapter 3",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaABFJr_eVRUhtaPnKfihePqqNsJjcGvZ62OgxCv6wjXn-XgGC",
            customer: "Keanu Reeves",
            date: "9 May 2019",
            amount: 32.73,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 1235,
            product: "John Wick: Chapter 4",
            img: "https://filmyhotspot.com/wp-content/uploads/2020/12/39e611e5-870c-4c6d-97a1-e7c9ee51a97b-819x1024.jpg",
            customer: "Keanu Reeves",
            date: "24 March 2023",
            amount: 32.73,
            method: "Online Payment",
            status: "Pending"
        },
    ];
    return (
        <div className='table'>
            <TableContainer component={Paper} className='table'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Tracking ID</TableCell>
                            <TableCell className="tableCell">Product</TableCell>
                            <TableCell className="tableCell">Customer</TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Payment Method</TableCell>
                            <TableCell className="tableCell">Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className='tableCell'>{row.id}</TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="" className='image' />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">{row.customer}</TableCell>
                                <TableCell className="tableCell">{row.date}</TableCell>
                                <TableCell className="tableCell">{row.amount}</TableCell>
                                <TableCell className="tableCell">{row.method}</TableCell>
                                <TableCell className="tableCell">
                                    <span className={`status ${row.status}`}>
                                        {row.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default List