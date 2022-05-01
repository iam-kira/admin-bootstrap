import './Chart.scss'
import { ComposedChart, YAxis, Legend, Bar, Line, XAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';


const data = [
    { Name: "January", Total: 1200, Rate: 120, Invest: 812 },
    { Name: "February", Total: 2100, Rate: 10, Invest: 1876 },
    { Name: "March", Total: 800, Rate: 50, Invest: 400 },
    { Name: "April", Total: 1600, Rate: 340, Invest: 800 },
    { Name: "May", Total: 900, Rate: 0, Invest: 900 },
    { Name: "June", Total: 1700, Rate: 100, Invest: 1600 },
];



const Chart1 = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="Invest" fill="grey" stroke="limegreen" />
                    <Bar dataKey="Total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="Rate" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart1
