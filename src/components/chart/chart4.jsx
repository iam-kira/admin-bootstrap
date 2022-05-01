import './Chart.scss'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const data = [
    { Name: "January", Total: 1200, Rate: 120, Invest: 812 },
    { Name: "February", Total: 2100, Rate: 10, Invest: 1876 },
    { Name: "March", Total: 800, Rate: 50, Invest: 400 },
    { Name: "April", Total: 1600, Rate: 340, Invest: 800 },
    { Name: "May", Total: 900, Rate: 0, Invest: 900 },
    { Name: "June", Total: 1700, Rate: 100, Invest: 1600 },
];



const Chart4 = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="Total" nameKey="Name" cx="50%" cy="50%" outerRadius={50} fill="#DEB6AB" />
                    <Pie data={data} dataKey="Rate" nameKey="Name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#85586F" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart4
